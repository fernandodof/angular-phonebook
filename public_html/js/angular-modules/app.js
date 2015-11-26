var app = angular.module('phonebook', [
        'jcs-autoValidate',
        'angular-ladda',
        'ngResource',
        'infinite-scroll',
        'angularSpinner',
        'toaster',
        'ngAnimate',
        'ui.router',
        'satellizer',
        
        'phonebook.directives.ccSpinner',
        'phonebook.directives.ccCard',
        'phonebook.config.config',
        'phonebook.config.AuthConfig',
        'phonebook.controllers.person.PersonDetailController',
        'phonebook.controllers.person.PersonCreateController',
        'phonebook.controllers.person.PersonListController',
        'phonebook.controllers.auth.AuthController',
        'phonebook.filters.defaultImage',
        'phonebook.services.PersonService',
        'phonebook.services.UserService',
        'phonebook.factories.Person',
        'phonebook.factories.User'
        ])
        .run(function (defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
            //Name
            errorMessages['shotName'] = 'You must type at least {} characters';
            errorMessages['longName'] = 'You must type no more than {} characters';
            errorMessages['badName'] = 'You must letters"';
        });

});
        var api_base = 'http://localhost:3000';