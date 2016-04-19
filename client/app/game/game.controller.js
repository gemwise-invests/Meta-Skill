'use strict';

class GameController {

    constructor($scope, $http, socket, $element, Wesnoth, character, _) {
        this.$scope = $scope;
        this.$http = $http;
        $scope.model = Wesnoth.HexMap;
        this.actions = [];
        this.socket = socket;
        this._ = _;
        this.Wesnoth = Wesnoth;
        this.character = character;

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

        this.printCharacterImg(this.character);
    }

    // TODO able to bind other characters
    printCharacterImg(character) {
        this.loadImage('/' + character.current.avatarImg).then(img => {
            this.onPostDraw = (ctx) => {
                const offsetX = character.current.pos.q * 54;
                const offsetY = character.current.pos.r * 72 + character.current.pos.q * 36;
                ctx.drawImage(img,
                    offsetX + this.wesnothTiles[0].clientWidth / 2 - 25,
                    offsetY + this.wesnothTiles[0].clientHeight / 2 - 32);
            }
        });
    }

    loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                resolve(img);
            }
            img.onerror = () => {
                reject();
            };
        });
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
            this.$scope.model.rows.forEach(row => {
                row.forEach(h => {
                    tempTiles.push({
                        q: h.q,
                        r: h.r,
                        terrain: h.terrain,
                        overlay: h.overlay,
                        fog: true
                    });
                })
            });

            tempTiles.forEach(h => this.$scope.model.set(h));

            response.data.tiles.forEach(h => {
                this.$scope.model.set(this.newTile(h, false))
            });

            // TODO kichoo to you... can we resolve images their promises again?
            // response.data.characters
            //     .filter(c => c.avatarImg)
            //     .map(c => ({current: c}))
            //     .map(c => this.printCharacterImg(c));
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


