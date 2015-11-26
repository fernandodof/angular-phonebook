angular.module('phonebook.services.PersonService', []).service('PersonService', function (Person, $rootScope, $q, toaster) {

    var peopleList = [];

    var self = {
        'page': 1,
        'hasMore': true,
        'isLoading': false,
        'isSaving': false,
        'isDeleting': false,
        'selectedPerson': null,
        'peopleList': [],
        'search': null,
        'order': 'name',
        'getPerson': function (id) {
            for (var i = 0; i < self.peopleList.length; i++) {
                if (self.peopleList[i].pk == id) {
                    return self.peopleList[i];
                }
            }
        },
        'doSearch': function () {
            self.hasMore = true;
            self.page = 1;
            self.peopleList = [];
            self.loadPeople();
        },
        'doOrder': function () {
            self.hasMore = true;
            self.page = 1;
            self.peopleList = [];
            self.loadPeople();
        },
        'loadPeople': function () {
            if (self.hasMore && !self.isLoading) {
                self.isLoading = true;
                var params = {
                    'page': self.page,
                    'search': self.search,
                    'order': self.order
                };

                Person.get(params, function (data) {
                    angular.forEach(data.results, function (person) {
                        self.peopleList.push(new Person(person));
                    });
                    console.log(data);

                    if (!data.next) {
                        self.hasMore = false;
                    }
                    self.isLoading = false;
                });
            }

        },
        'loadMore': function () {
            if (self.hasMore && !self.isLoading) {
                self.page += 1;
                self.loadPeople();
            }
        },
        'updatePerson': function (person) {
            var d = $q.defer();
            self.isSaving = true;
            person.$update().then(function () {
                self.isSaving = false;
                toaster.pop('success', 'Updated ' + person.name);
                d.resolve();
            });
            return d.promise;
        },
        'deletePerson': function (person) {
            var d = $q.defer();
            self.isDeleting = true;
            person.$remove().then(function () {
                self.isDeleting = false;
                var index = self.peopleList.indexOf(person);
                self.peopleList.splice(index, 1);
                self.selectedPerson = null;
                toaster.pop('success', 'Deleted ' + person.name);
                d.resolve();
            });
            return d.promise;
        },
        'addPerson': function (person) {
            var d = $q.defer();
            self.isSaving = true;
            Person.save(person).$promise.then(function (data) {
                self.isSaving = false;
                self.selectedPerson = null;
                self.hasMore = true;
                self.page = 1;
                self.peopleList = [];
                self.loadPeople();
                console.log(data);
                toaster.pop('success', 'Added ' + person.name);
                d.resolve();
            });

            return d.promise;
        },
        'watchFilters': function () {
            $rootScope.$watch(function () {
                return self.search;
            }, function (newVal) {
                if (angular.isDefined(newVal)) {
                    self.doSearch();
                }
            });
            $rootScope.$watch(function () {
                return self.order;
            }, function (newVal) {
                if (angular.isDefined(newVal)) {
                    self.doOrder();
                }

            });
        }


    };

    self.loadPeople();
    self.watchFilters();

    return self;

});