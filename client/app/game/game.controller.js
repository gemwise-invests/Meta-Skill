'use strict';

class GameController {

    constructor($scope, $http, socket, $element, Wesnoth, _) {
        this.$scope = $scope;
        this.$http = $http;
        $scope.model = Wesnoth.HexMap;
        this.actions = [];
        this.socket = socket;
        this._ = _;
        this.Wesnoth = Wesnoth;

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('action');
        });

        this.onHexClicked = (h) => {
            console.log("Clicked hex", h);
        }

        this.wesnothTiles = $element.find('wesnoth-tiles');

        this.getStatus();
        this.$onInit();

        this.loadImage("assets/images/hero.png").then(img => {
            this.onPostDraw = (ctx) => {
                if (this.character) {
                    const offsetX = this.character.pos.q * 54;
                    const offsetY = this.character.pos.r * 72 + this.character.pos.q * 36;
                    console.log(offsetX, offsetY)
                    ctx.drawImage(img,
                        offsetX + this.wesnothTiles[0].clientWidth / 2 - 25,
                        offsetY + this.wesnothTiles[0].clientHeight / 2 - 32);
                }

            }
        })

        //TODO titles.findNearby([newActions.length - 1])
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

    getStatus() {
        return this.$http.get('/api/actions/status').then(response => {
            this.character = response.data.character;

            response.data.tiles.forEach(h => {
                this.$scope.model.set({
                    q: h.q, r: h.r,
                    terrain: this.Wesnoth.ETerrain[h.t],
                    overlay: this.Wesnoth.EOverlay[h.o],
                    fog: false
                })
            })
        });
    }

    move(direction) {
        this.$http.post('/api/actions/move', {to: direction});
    }
}

angular.module('mudServerApp.game')
    .controller('GameController', GameController);


