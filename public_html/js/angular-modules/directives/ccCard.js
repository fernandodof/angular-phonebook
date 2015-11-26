angular.module('phonebook.directives.ccCard', []).directive('ccCard', function () {
    return {
        'restrict': 'AE',
        'templateUrl': 'templates/card.html',
        'scope': {
            'person': '='
//            'deletePerson': '&'
        },
        'controller': function ($scope, PersonService) {
            $scope.isDeleting = false;

            $scope.deletePerson = function () {
                $scope.isDeleting = true;
                PersonService.deletePerson($scope.person).then(function () {
                    $scope.isDeleting = false;
                });
            };
        }
    };
});