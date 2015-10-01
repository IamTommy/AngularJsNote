/**
 * Created by CallMeTommy on 2015/9/29.
 */

var routertest = angular.module("routerBook", ['ui.router']);


routertest.config(function ($stateProvider,
                            $urlRouterProvider) {
    $stateProvider.state("home", {
        url: "/",
        templateUrl: 'Tpl/uiRouter/HomePage.html',
        controller: 'homePage'
    });


    //templates
    $stateProvider.state('templates', {
        url: '/templates',
        templateUrl: "Tpl/uiRouter/bookTemplates.html",
        controller: 'homePage'
    }).state('templates.template', {
        ulr: '/template',
        template: "<h3>{{title}}</h3>",
        controller: 'templateCtrl'
    }).state('templates.templateProvider', {
        url: '/templates/templateProvider/{Id}',
        templatProvider: function ($timeout, $stateParams) {
            return $timeout(function () {
                debugger;
                var id = $stateParams.Id;
                switch (id) {
                    case '1':
                        return '<h3> this is template for param1 </h3>';
                    case '2':
                        return '<h3> this is template for param2 </h3>';
                    case '3':
                        return '<h3> this is template for param3 </h3>';
                    default :
                        return '<h3> this is template for default </h3>';
                }
            });
        }
    });


    //Controllers
    $stateProvider.state("myControllers",{
        url:'/myControllers',
        templateUrl:'Tpl/uiRouter/bookControllers.html'
    }).state("myControllers.typeFunction",{
        url:"/typeFunction",
        template:"<h3>{{title}}</h3>",
        controller:function($scope) {
            $scope.title = " Hi this is Controller of function ";
        }
    }).state('myControllers.stringAs',{
        url:"/stringAs",
        template:"<h3>{{title}}<small>{{ctrl.stringAs}}</small></h3>",
        controller:"stringAsCtrl as ctrl"
    }).state("myControllers.myProvider",{
        url:'/myProvider/task/:taskName',
        template:"<h3>{{title}}</h3>",
        controllerProvider: function($stateParams) {
            var taskName = $stateParams.taskName;

            if(!taskName)
                taskName = "NoTask";

            return "controllerProvider" + taskName;
        }
    });


});