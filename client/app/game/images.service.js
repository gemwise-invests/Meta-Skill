angular.module('mudServerApp')
    .service('imagesService', function () {
        'use strict'
        const avatarsMap = new Map();

        function loadImage(avatarSrc) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = avatarSrc;
                img.onload = () => {
                    resolve(img);
                }
                img.onerror = () => {
                    reject();
                };
            });
        }

        return {
            getAvatar(avatarSrc) {
                if (avatarsMap.has(avatarSrc)) {
                    return avatarsMap.get(avatarSrc)
                } else {
                    loadImage(avatarSrc).then(img => {
                        avatarsMap.set(avatarSrc, img);
                    }, err => {
                        console.log("Error, cannot load the avatar img!", err);
                        avatarsMap.set(avatarSrc, null);
                    });
                    return null
                }
            }
        }
    })
