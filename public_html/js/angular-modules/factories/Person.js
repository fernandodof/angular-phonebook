angular.module('phonebook.factories.Person',[]).factory('Person', function ($resource) {
    return $resource(api_base + '/person/:pk', {pk: '@pk'}, {
        update: {
            method: 'PUT'
        },
        headers: {'X-Requested-With': 'XMLHttpRequest'}
    });
});