/**
 * Created by CallMeTommy on 2015/9/14.
 */

/// <reference path="../angular/angular.js" />

var uiRouterService = angular.module("ui_Router_Service", []);
uiRouterService.service('myBookService', [function () {
    return {
        data: [
            {title: "Magician", author: "Raymond E. Feist"},
            {title: "The Hobbit", author: "J.R.R Tolkien"}
        ],
        addBook: function (book) {
            this.data.push(book);
        }
    };
}]);