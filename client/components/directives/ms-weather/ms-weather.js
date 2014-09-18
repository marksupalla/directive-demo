(function(){
  'use strict';
  angular.module('msWeatherModule', [])
  .factory('WeatherApi', ['$http', function($http){
    function temp(query){

      return $http.jsonp('http://api.wunderground.com/api/e972031c42874e44/conditions/q/' + query + '.json?callback=JSON_CALLBACK');
    }
    return {temp:temp};
  }])

  .directive('msWeather', [function(){
    var o = {};
    o.restrict    = 'A';
    o.templateUrl = '/components/directives/ms-weather/ms-weather.html';
    o.scope       = {zip:'@'};
    o.link        = function(scope, element, attrs){
                      element.on('$destroy', function(){
                      });
                    };
    o.controller = ['$scope', 'WeatherApi', function($scope, WeatherApi){
                        $scope.$on('position', function(event, pos){
                          if($scope.zip){return;}

                          console.log('i amd the weather', pos);
                          var query = pos.coords.latitude + ',' + pos.coords.longitude;
                          weather(query);

                        });

                        function weather(query){
                        WeatherApi.temp(query).then(function(response){
                          $scope.weather = response.data;
                        });
                      }
                      if($scope.zip){weather($scope.zip);}
                    }];
    return o;
  }]);
})();
