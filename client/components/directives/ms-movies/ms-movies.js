(function(){
  'use strict';
  angular.module('msMovieModule', [])
  .factory('MovieApi', ['$http', function($http){
    function info(title){
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=' + title + '&page_limit=1&page=1&apikey=fhghfu97v36886x7kj27z63j&callback=JSON_CALLBACK');
    }
    console.log(info);
    return {info:info};
  }])

  .directive('msMovies', [function(){
    var o = {};
    o.restrict    = 'A';
    o.templateUrl = '/components/directives/ms-movies/ms-movies.html';
    o.scope       = {title:'@', remove:'&'};
    o.link        = function(scope, element, attrs){
                    };
    o.controller = ['$scope', 'MovieApi', function($scope, MovieApi){
                        MovieApi.info($scope.title).then(function(response){
                          $scope.movie = response.data.movies[0];
                          $scope.poster = $scope.movie.posters.thumbnail.replace(/_tmb/, '_pos');
                        });
                    }];
    return o;
  }]);
})();
