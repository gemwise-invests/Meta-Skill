angular.module('mudServerApp')
    .directive('kleineEuleCard', function () {
        return {
            restrict: 'EA',
            scope: {
                pickAvatar: "="
            },
            template: `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail hover-grow">
                    <a class="thumbnail" ng-click="pickAvatar('kleine-eule')">
                        <img alt="kleine eule" class="avatar-card"
                             src="assets/avatars/kleine-eule.png">
                    </a>
                    <div class="caption">
                        <h3>Kleine Eule</h3>
                        <p><strong>About:</strong> You don't want to mess with this small owl. It has power of finding and killing its opponents.
                            Most owls do play a <strong><a href="http://www.bullshitbingo.net/cards/agile/">bullshit bingo</a></strong> during boring meetings.
                            They wear a branded t-shirts to prove their worth.
                            They have a powers of <strong>php</strong> and <strong>holocracy</strong>.
                        </p>
                    </div>
                </div>
            </div>`
        }
    });
