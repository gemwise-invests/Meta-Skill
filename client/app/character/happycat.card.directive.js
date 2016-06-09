angular.module('mudServerApp').directive('happyCatCard', () => ({
    restrict: 'EA',
    scope: {
        pickAvatar: "="
    },
    template: `
    <div class="col-sm-6 col-md-4">
        <div class="thumbnail hover-grow">
            <a class="thumbnail" ng-click="pickAvatar('happy-cat')">
                <img alt="grumpy cat" class="avatar-card"
                     src="assets/avatars/yes-we-cat.jpg">
            </a>
            <div class="caption">
                <h3>Yes Cat</h3>
                <p><strong>About:</strong> He's a motral enemy of a grumpy cat. Tho not that famous as hes arch-nemesis,
                    he masters powers of <strong>scrum</strong> and <strong>agility</strong>. His no-can-do attitude
                    and positive energy gives him power even to survive concrete-product
                </p>
            </div>
        </div>
    </div>`
}))
