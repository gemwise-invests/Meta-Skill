angular.module('mudServerApp')
    .directive('productCard', function () {
        return {
            restrict: 'EA',
            scope: {
                pickAvatar: "="
            },
            template: `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail hover-grow">
                    <a class="thumbnail" ng-click="pickAvatar('product')">
                        <img alt="Concrete product" class="avatar-card"
                             src="assets/avatars/concrete-product.jpg">
                    </a>
                    <div class="caption">
                        <h3>Concrete product</h3>
                        <p><strong>About:</strong> People spend whole days discussing whether the Concrete Products exist or not.
                            Most people even think they are Abstract Products or fabled Merchant Products.
                            Mystic Powers include: <strong>json schema</strong> and amazon <strong>file integration</strong>.
                        </p>
                    </div>
                </div>
            </div>`
        }
    });
