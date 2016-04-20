angular.module('mudServerApp')
    .directive('vikingCard', function () {
        return {
            restrict: 'EA',
            scope: {
                pickAvatar: "="
            },
            template: `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail hover-grow">
                    <a class="thumbnail" ng-click="pickAvatar('viking')">
                        <img alt="techno viking" class="avatar-card"
                             src="assets/avatars/techno-viking-sticker.png">
                    </a>
                    <div class="caption">
                        <h3>Viking</h3>
                        <p><strong>About:</strong> Vikings were the Justin Biebers of the 10th century.
                            They have the power of <strong><a href="https://youtu.be/FwsntHcWiy4?t=63">techno</a>
                            </strong> and <strong>hammertime</strong>.
                            They also are fans of strong type systems without type inference.
                        </p>
                    </div>
                </div>
            </div>`
        }
    });
