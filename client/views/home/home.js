(function(){
  'use strict';

  angular.module('directive-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.people  = [{name:'Bob', age:25}, {name:'Sally', age:'22'}];
    $scope.symbols = ['AAPL', 'GOOG', 'MSFT'];
    $scope.zips = ['37209', '90210', '55356'];
    //$scope.title = {};
    $scope.titles = [];
/*
    Title.all().then(function(response){
      $scope.titles = response.data.titles;
    });

    Title.create($scope.title).then(function(response){
      $scope.titles.push(response.data.title);
    });
*/
    $scope.delMovie = function(index){
      $scope.titles.splice(index, 1);
    };

    $scope.addMovie = function(){
      $scope.titles.push($scope.title);
      $scope.title = null;
    };
  }]);
})();

