angular.module('mudServerApp')
    .factory('character', function (Auth, Modal) {
        'use strict'

        // TODO its ugly API
        let character = {};

        return {
            get current() {
                return character || Auth.getCurrentUser().character
            },
            setCharacter(newCharacter) {
                return character = newCharacter
            },
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
            }
        }
    })
