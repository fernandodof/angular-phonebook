angular.module('phonebook.controllers.person.PersonCreateController', []).controller('PersonCreateController', function ($scope, $state, PersonService) {
    $scope.personServiceRef = PersonService;
    $scope.personServiceRef.selectedPerson = null;
    $scope.mode = "Create";

    $scope.save = function () {
        console.log($scope.personServiceRef.selectedPerson);
        $scope.personServiceRef.addPerson($scope.personServiceRef.selectedPerson)
                .then(function () {
                    $state.go("list");
                });
    };

});