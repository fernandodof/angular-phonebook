angular.module('phonebook.config.AuthConfig',[]).config(function ($authProvider) {
    $authProvider.facebook({
        clientId: '104852553217497'
    });
});