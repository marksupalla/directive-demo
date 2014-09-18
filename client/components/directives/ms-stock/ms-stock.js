(function(){
  'use strict';
  angular.module('msStockModule', [])
  .factory('StockApi', ['$http', function($http){
    function quote(symbol){
      return $http.jsonp('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=JSON_CALLBACK');
    }
    return {quote:quote};
  }])

  .directive('msStock', ['$interval', function($interval){
    var o = {};
    o.restrict    = 'A';
    o.templateUrl = '/components/directives/ms-stock/ms-stock.html';
    o.scope       = {symbol:'@'};
    o.link        = function(scope, element, attrs){
                      element.on('$destroy', function(){
                        $interval.cancel(scope.id);
                      });
                    };
    o.controller = ['$scope', 'StockApi', function($scope, StockApi){
                      function getQuote(){
                        StockApi.quote($scope.symbol).then(function(response){
                          $scope.quote = response.data.LastPrice;
                        });
                      }
                      $scope.id = $interval(getQuote, 30000);
                      getQuote();
                    }];
    return o;
  }]);
})();
