/**
 * Created by CallMeTommy on 2015/10/2.
 */


/// <reference path="../angular/angular.js" />

var uiRouterService = angular.module("ui_Router_Service", []);
uiRouterService.service('myBookService', [function() {

    var data =
        [{
            title: "Magician",
            author: "Raymond E. Feist"
        }, {
            title: "The Hobbit",
            author: "J.R.R Tolkien"
        }];

    return {

        addBook: function(book) {
            this.data.push(book);
        },

        getList: function() {
            return data;
        }
    };
}]);