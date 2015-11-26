angular.module('phonebook.config.config', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('list', {
                        url: '/list',
                        views: {
                            'navbarButtons': {
                                templateUrl: 'templates/navbarButtons.html'
                            },
                            'main': {
                                templateUrl: 'templates/list.html',
                                controller: 'PersonListController'
                            },
                            'search': {
                                templateUrl: 'templates/searchForm.html',
                                controller: 'PersonDetailController'
                            }
                        }
                    })
                    .state('edit', {
                        url: '/edit/:id',
                        views: {
                            'navbarButtons': {
                                templateUrl: 'templates/navbarButtons.html'
                            },
                            'main': {
                                templateUrl: 'templates/edit.html',
                                controller: 'PersonDetailController'
                            }
                        }
                    })
                    .state('create', {
                        url: '/create',
                        views: {
                            'navbarButtons': {
                                templateUrl: 'templates/navbarButtons.html'
                            },
                            'main': {
                                templateUrl: 'templates/edit.html',
                                controller: 'PersonCreateController'
                            }
                        }
                    })
                    .state('login', {
                        url: '/',
                        views: {
                            main: {
                                templateUrl: 'templates/loginSignup.html',
                                controller: 'AuthController'
                            }
                        }
                    });
            $urlRouterProvider.otherwise('/');
        })
        .config(function ($httpProvider, $resourceProvider, laddaProvider) {
            $resourceProvider.defaults.stripTralingSlashes = false;
            laddaProvider.setOption({
                style: 'expand-right'
            });
        })
        .config(function ($authProvider) {
//            $authProvider.httpInterceptor = true;
//            $authProvider.withCredentials = true;
//            $authProvider.tokenRoot = null;
//            $authProvider.cordova = false;
            $authProvider.baseUrl = api_base;
            $authProvider.loginUrl = '/auth/login';
//            $authProvider.signupUrl = '/auth/signup';
//            $authProvider.unlinkUrl = '/auth/unlink/';
//            $authProvider.tokenName = 'token';
//            $authProvider.tokenPrefix = 'satellizer';
//            $authProvider.authHeader = 'Authorization';
//            $authProvider.authToken = 'Bearer';
//            $authProvider.storageType = 'localStorage';
        }); 