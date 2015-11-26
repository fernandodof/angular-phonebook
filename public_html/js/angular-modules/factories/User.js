angular.module('phonebook.factories.User', []).factory('User', function($resource){
    return $resource(api_base + '/user/:id');
});

