/**
 * Created by CallMeTommy on 2015/9/29.
 */

var routertest = angular.module("routerBook", ['ui.router']);


function aaa(){};

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
    $stateProvider.state("myControllers", {
        url: '/myControllers',
        templateUrl: 'Tpl/uiRouter/bookControllers.html'
    }).state("myControllers.typeFunction", {
        url: "/typeFunction",
        template: "<h3>{{title}}</h3>",
        controller: function ($scope) {
            $scope.title = " Hi this is Controller of function ";
        }
    }).state('myControllers.stringAs', {
        url: "/stringAs",
        template: "<h3>{{title}}<small>{{ctrl.stringAs}}</small></h3>",
        controller: "stringAsCtrl as ctrl"
    }).state("myControllers.myProvider", {
        url: '/myProvider/task/:taskName',
        template: "<h3>{{title}}</h3>",
        controllerProvider: function ($stateParams) {
            var taskName = $stateParams.taskName;

            if (!taskName)
                taskName = "NoTask";

            return "controllerProvider" + taskName;
        }
    });

    //Resolves
    $stateProvider.state("myResolves", {
        url: '/myResolves',
        template: '<h3>{{title}}</h3>',
        resolve: {
            simpleObj: function () {
                //console.log('simpleObj');

                return {
                    value: 'simple!'
                };
            },
            evenTest: function () {


            }
        },
        controller: function ($scope, simpleObj) {
            $scope.title = simpleObj.value;


             $scope.$on('$viewContentLoading',function(event, viewConfig){

                    console.log('$viewContentLoading');
             });

             $scope.$on('$viewContentLoaded',function(event, viewConfig){
                console.log('$viewContentLoading');
             });
            //console.log(' pass by ctrl ');
        },
        onEnter: function (simpleObj) {
            //console.log(simpleObj.value);
            //console.log("onEnter");
        },
        onExit: function (simpleObj) {
            //console.log(simpleObj.value);
            //console.log("onExit");
        }
    });


    //parent

    $stateProvider.state("myParent",{

        url : "/myParent",
        templateUrl:"Tpl/uiRouter/booMyParents.html",
        controller:function($scope)
        {
            $scope.talk = " oh my son ";
        },
        resolve:{
            mytest1 : function(){
                return "heiheihei";
            },
            mytest2 : function(){
                return "hahaha";
            }
        }

    }).state("myParent.child1",{
        url : "/child1",
        template:"<h3>this is child string , my parent say ' {{talk}} ' </h3>"
    }).state("child2",{
        url : "/child2",
        template:"<h3>this is child parent , my parent say ' {{talk}} ' </h3>",
        parent : 'myParent',
        resolve: {
            mytest2 : function(){
                return "testhhaaha";
            }
        },
        controller:function(mytest1,mytest2)
        {
            console.log(mytest1);
            console.log(mytest2);
        }
    });


    $stateProvider.state("testAbstract",{

        url : "/testAbstract",
            templateUrl:"Tpl/uiRouter/bookAbstract.html",
        controller:function($scope)
        {
            $scope.talk = " oh my son ";
        },
        abstract : true

    }).state("testAbstract.heihei",{
        templateUrl:"Tpl/uiRouter/bookAbstract1.html"
    });

    $stateProvider.state("myViews",{
        url:'/myViews',
        template:"<h3>myViews</h3><div ui-view='body'></div><div ui-view='footer'></div>",
        views:{
            "body":{
                template : " this is body {{say}} ",
                controller:function($scope)
                {
                    $scope.say  = "call me body"
                }
            },
            "footer":{
                template : " this is footer {{say}} ",
                controller:function($scope)
                {
                    $scope.say  = "call me footer"
                }
            }
        }
    });
});