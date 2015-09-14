/**
 * Created by CallMeTommy on 2015/9/10.
 */

/// <reference path="../angular/angular.js" />

var uiRouterCtrl = angular.module("uiRouterCtrl",[]);
uiRouterCtrl.controller("firstCtrl",function($scope,myBookService){

    $scope.listData = [
        { name : "Tommy",email:"tlstommy@qq.com" },
        { name : "Jacking",email:"jacking@qq.com" },
        { name : "ling",email:"ling@qq.com" }
    ];
});

uiRouterCtrl.controller("urlCtrl1",function($scope){
    $scope.urls = [
        { name : "id1",serf:"" }
    ];
});