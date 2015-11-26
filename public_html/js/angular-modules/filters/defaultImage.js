angular.module('phonebook.filters.defaultImage',[]).filter("defaultImage", function () {
    return function (input, param) {
        var image = input;
        if (!input) {
            image = param;
        }
        return image;
    };
});