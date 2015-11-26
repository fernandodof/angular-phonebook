angular.module('phonebook.services.UserService', []).service('UserService', function (User, $q, $http, toaster) {
    var self = {
        'isSaving' : false,
        'signup': function (credentials){
            var d = $q.defer();
            self.isSaving = true;
            console.log('User to save', credentials);
            User.save(credentials).$promise.then(function (data) {
                console.log('User saved', data);
                self.isSaving = false;
                toaster.pop('success', 'User created, you may login now');
                d.resolve();
            },function (error){
                console.log('error', error.data);
                d.resolve();
            });
            return d.promise;
        },
        'login': function (credentials){
            return $http.post(api_base + '/auth/login', credentials); 
        }
    };
    return self;
});