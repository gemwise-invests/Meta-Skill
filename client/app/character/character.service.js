angular.module('mudServerApp')
    .factory('character', function (Auth, Modal, $state) {
        'use strict'

        return {
            get current() {
                return Auth.getCurrentUser() && Auth.getCurrentUser().character
            },
            setCharacter: Auth.setCharacter,
            levelUp(msg, user) {
                const popup = Modal.openModal({
                    modal: {
                        dismissable: true,
                        title: 'Congratulations!',
                        html: `<p><strong> ${msg} </strong></p>`,
                        buttons: [{
                            classes: 'btn-success',
                            text: 'LevelUp',
                            click: (e) => {
                                popup.close(e)
                                $state.go('character')
                            }
                        }, {
                            classes: 'btn-default',
                            text: 'Ok',
                            click: (e) => {
                                popup.dismiss(e)
                            }
                        }]
                    }
                }, 'modal-success')

                return popup.result
            },
            fakeBestPlayer: () => ({
                name: 'Doge',
                level: 3,
                items: ['Doge Coins'],
                stats: {
                    str: 20,
                    mov: 38,
                    agl: 10,
                    maxHp: 22,
                    hp: 13
                },
                avatarImg: 'doge'
            })
        }
    })
