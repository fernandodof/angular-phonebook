angular.module('phonebook.controllers.person.PersonListController', []).controller('PersonListController', function ($scope, PersonService) {
    $scope.formModel = {};
    $scope.submiting = false;
    $scope.search = '';
    $scope.order = "name";
    $scope.personServiceRef = PersonService;
    $scope.people = [];

    $scope.loadMorePeople = function () {
        $scope.personServiceRef.loadMore();
    };
});