angular.module('phonebook.directives.ccSpinner', []).directive('ccSpinner', function () {
    return {
        'restrict': 'AE',
        'templateUrl': 'templates/spinner.html',
        'scope': {
            isLoading: '='
        }
    };
});
