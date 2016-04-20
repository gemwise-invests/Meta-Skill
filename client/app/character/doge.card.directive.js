angular.module('mudServerApp')
    .directive('dogeCard', function () {
        return {
            restrict: 'EA',
            scope: {
                pickAvatar: "="
            },
            template: `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail hover-grow">
                    <a class="thumbnail" ng-click="pickAvatar('doge')">
                        <img alt="doge coin" class="avatar-card"
                             src="assets/avatars/dogecoin.jpg">
                    </a>
                    <div class="caption">
                        <h3>Doge</h3>
                        <p><strong>About:</strong> Doge comes in many flavors: <strong>astronaut</strong>, and <strong>lion</strong> to name a few.
                            He's world renowned for being doge.
                            Brings power of meme to your mobile device.
                            His skills include <strong><a href="http://dogecoin.com/">making coins</a></strong>, and
                            <strong>much wow!</strong>
                        </p>
                    </div>
                </div>
            </div>`
        }
    });
