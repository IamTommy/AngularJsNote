/**
 * Created by CallMeTommy on 2015/9/29.
 */

var bookControllers = angular.module("bookControllers",[]);

bookControllers.controller('homePage',function($scope){
    $scope.title = 'welcome to BookMarket';
});

bookControllers.controller('templateCtrl',function($scope){
    $scope.title = ' this is template display';
});

bookControllers.controller('stringAsCtrl',function($scope){
    $scope.title = ' this is stringAs display';

    this.stringAs = "wolegequ";
});

bookControllers.controller('controllerProviderNoTask',function($scope){
    $scope.title = ' this is controllerProvider NoTask display';
});

bookControllers.controller('controllerProviderhomeWork',function($scope){
    $scope.title = ' this is controllerProviderDoHomeWork display';
});

bookControllers.controller('controllerProvidercleanHouse',function($scope){
    $scope.title = ' this is controllerProvider cleanHouse display';
});

bookControllers.controller('controllerProvidersleep',function($scope){
    $scope.title = ' this is controllerProvider sleep display';
});

