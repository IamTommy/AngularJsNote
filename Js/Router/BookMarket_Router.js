/**
 * Created by CallMeTommy on 2015/9/29.
 */

var routertest = angular.module("routerBook", ['ui.router']);


routertest.config(function ($stateProvider,
                                 $urlRouterProvider)
{
    $stateProvider.state("home", {
        url: "/",
        templateUrl: 'Tpl/uiRouter/HomePage.html',
        controller: 'homePage'
    })



});