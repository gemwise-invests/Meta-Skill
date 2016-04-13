(function (angular, _, undefined) {
    angular.module("mudServerApp.constants", [])
        .constant("appConfig", {
            "userRoles": [
                "guest",
                "user",
                "admin"
            ]
        })
        .constant("_", _);
})(angular, _);
