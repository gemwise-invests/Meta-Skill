angular.module('mudServerApp')
    .directive('grumpyCard', function () {
        return {
            restrict: 'EA',
            scope: {
                pickAvatar: "="
            },
            template: `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail hover-grow">
                    <a class="thumbnail" ng-click="pickAvatar('grumpy')">
                        <img alt="grumpy cat" class="avatar-card"
                             src="assets/avatars/grumpy-cat.jpg">
                    </a>
                    <div class="caption">
                        <h3>Grumpy cat</h3>
                        <p><strong>Skills</strong> He's an internet celebrity. Hangs out with the MTV crowd and movie stars.
                            Brings power of meme to your mobile device.
                            His skills include <strong>being grumpy</strong>, and <strong>e-commerce</strong>
                        </p>
                    </div>
                </div>
            </div>`
        }
    });
