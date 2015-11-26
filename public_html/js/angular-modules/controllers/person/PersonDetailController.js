angular.module('phonebook.controllers.person.PersonDetailController', []).controller('PersonDetailController', function ($scope, $stateParams, $state, PersonService) {
    $scope.personServiceRef = PersonService;
    $scope.mode = "Edit";

    $scope.personServiceRef.selectedPerson = $scope.personServiceRef.getPerson($stateParams.id);

    $scope.save = function () {
        $scope.personServiceRef.updatePerson($scope.personServiceRef.selectedPerson).then(function () {
            console.log($scope.personServiceRef.selectedPerson);
            $state.go("list");
        });
    };

    $scope.delete = function () {
        $scope.personServiceRef.deletePerson($scope.personServiceRef.selectedPerson).then(function () {
            $state.go("list");
        });
    };

});