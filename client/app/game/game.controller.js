'use strict';

class GameController {

    constructor($scope, $http, socket, $element, Wesnoth, character, imagesService, _) {
        this.$scope = $scope;
        this.$http = $http;
        $scope.model = Wesnoth.HexMap;
        this.actions = [];
        this.socket = socket;
        this._ = _;
        this.enemies = [];
        this.Wesnoth = Wesnoth;
        this.character = character;
        this.imagesService = imagesService;
        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('action');
        });

        this.onHexClicked = (h) => {
            console.log("Clicked hex", h);
        }

        this.wesnothTiles = $element.find('wesnoth-tiles');

        this.getStatus();
        this.$onInit();

        $scope.$watchCollection(() => this.actions, (newActions, oldActions) => {
            if (!newActions) {
                return
            }
            this.getStatus()
        });

        // leave this debug object
        window.scope = this;
    }

    $onInit() {
        this.$http.get('/api/actions/move').then(response => {
            this.actions = response.data;

            this.socket.syncUpdates('action', this.actions);
        });
    }

    // TODO able to bind other characters
    loadAndSaveAvatar(character) {
        this.loadImage('/' + character.avatarImg).then(img => {
            character.img = img;
        });
    }

    drawCharacter(ctx, character) {
        const img = this.imagesService.getAvatar(character.avatarImg);
        if (!img) return;
        const offsetX = character.pos.q * 54;
        const offsetY = character.pos.r * 72 + character.pos.q * 36;
        ctx.drawImage(img,
            offsetX + this.wesnothTiles[0].clientWidth / 2 - 25,
            offsetY + this.wesnothTiles[0].clientHeight / 2 - 32);
    }

    newTile(h, fog) {
        return {
            q: h.q, r: h.r,
            terrain: this.Wesnoth.ETerrain[h.t],
            overlay: this.Wesnoth.EOverlay[h.o],
            fog
        }
    }

    getStatus() {
        return this.$http.get('/api/status').then(response => {
            this.character.setCharacter(response.data.character)

            const tempTiles = [];
            this.$scope.model.iterate(h => {
                if (!h.fog && h.terrain !== this.Wesnoth.ETerrain.VOID) {
                    tempTiles.push({
                        q: h.q,
                        r: h.r,
                        terrain: h.terrain,
                        overlay: h.overlay,
                        fog: true
                    });
                }
            });

            tempTiles.forEach(h => this.$scope.model.set(h));

            response.data.tiles.forEach(h => {
                this.$scope.model.set(this.newTile(h, false))
            });

            this.enemies = response.data.characters
                .filter(c => c.avatarImg)

            this.onPostDraw = (ctx) => {
                this.enemies.forEach(e => this.drawCharacter(ctx, e))
                this.drawCharacter(ctx, this.character.current)
            }
        });
    }

    // checks if game is won!
    move(direction) {
        this.$http.post('/api/actions/move', {to: direction}).then(res => {
            if (217 !== res.status) {
                return
            }
            this.character.levelUp(res.data.message).then(function (event) {
                // TODO
                // sth.apply(event, args)
                console.warn(event)
            })
        })
    }

}

angular.module('mudServerApp.game')
    .controller('GameController', GameController);


