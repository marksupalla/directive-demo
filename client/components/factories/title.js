(function(){
  'use strict';

  angular.module('directive-demo')
  .factory('Title', ['$http', function($http){

    function create(title){
      return $http.post('/', title);
    }
    function all(){
      return $http.get('/');
    }

    return {create:create, all:all};
  }]);
})();

