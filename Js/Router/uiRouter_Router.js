/**
 * Created by CallMeTommy on 2015/9/10.
 */

/// <reference path="../angular/angular.js" />

var uiRouter_Router = angular.module("uiRouter_Router", ['ui.router']);
uiRouter_Router.config(function ($stateProvider,
                                 $urlRouterProvider) {
        $stateProvider.state("home", {
            url: "/",
            template: '<p class="lead">Welcome to the UI-Router Demo</p>' +
            '<p>Use the menu above to navigate. ' +
            'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
            '<p>Click these links—<a href="#/c?id=1">Alice</a> or ' +
            '<a href="#/user/42">Bob</a>—to see a url redirect in action.</p>'
        }).state("content", {
            url: "/content",
            templateUrl: 'tpl/uiRouter/page1.html',
            controller: function ($scope) {
                $scope.title = "heheheh";
            }
        }).state("content.list1", {
            url: "/list1/{contactId:[0-9]{1,4}}",
            templateProvider: function ($timeout, $stateParams) {
                return $timeout(function () {
                    return '<h1>List' + $stateParams.contactId + '</h1>'
                }, 100);
            }
        }).state("content.list2", {
            url: "/list2/{contactId:[0-9]{1,4}}",
            templateProvider: function ($timeout, $stateParams) {
                return $timeout(function () {
                    return '<h1>List' + $stateParams.contactId + '</h1>'
                }, 100);
            }
        }).state("content.list3", {
            url: "/list3",
            templateUrl: "tpl/uiRouter/list3.html",
            controller: "firstCtrl"
        }).state("content.list4", {
            url: "/list4",
            templateUrl: "tpl/uiRouter/list4.html",
            controllerProvider: function ($stateParams) {
                //暂时还不知道做什么的...
                //先看完教程...
            }
        }).state("content.list5", {
            url:"/list5",
            resole: {
                translation: "translation",
                getData: function () {
                    return [
                        {name: "Tommy", age: 27},
                        {name: "strong", age: 37},
                        {name: "tim", age: 38},
                        {name: "jinuobili", age: 39},
                    ];
                }
            },
            controller:"ageTable"
        });
    }
);