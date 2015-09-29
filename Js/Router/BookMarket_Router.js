/**
 * Created by CallMeTommy on 2015/9/29.
 */

var router = angular.module("router", ['ui.router']);


router.config(function ($stateProvider,
                                 $urlRouterProvider)
{
    $stateProvider.state("home", {
        url: "/",
        template: '<h1>{{title}}}</h1>',
        controller:'homePage'
    })



});