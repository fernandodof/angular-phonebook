angular.module('phonebook.controllers.auth.AuthController', []).controller('AuthController', function ($scope, $state, $http, UserService, $auth) {
    $scope.signupModel = {};
    $scope.userService = UserService;
    $scope.confirmPassword = null;

    $scope.loginCredentials = {};


    $scope.signup = function () {
        console.log($scope.signupModel);
        if ($scope.signupModel.password == $scope.confirmPassword) {
            $scope.userService.signup($scope.signupModel)
                    .then(function () {
                        $scope.signupModel = {};
                    });
        }
    };

    $scope.login = function () {
        console.log($scope.loginCredentials);
        $auth.login($scope.loginCredentials)
                .then(function (response) {
                    console.log('ok', response);
                })
                .catch(function (response) {
                    console.log('not ok', response);
                    // Handle errors here, such as displaying a notification
                    // for invalid email and/or password.
                });
    };


    $scope.isAuthenticated = function () {
        alert($auth.isAuthenticated());
    };

    $scope.logout = function () {
        $auth.logout();
    };

//    $scope.login = function () {
//        console.log($scope.loginCredentials);
//        $scope.userService.login($scope.loginCredentials)
//                .success(function (data) {
//                    console.log(data);
//                    $state.go('list');
//                })
//                .error(function (data) {
//                    console.log(data);
//                });
//    };

    $scope.authenticate = function (provider) {
        $auth.authenticate(provider);
    };

});