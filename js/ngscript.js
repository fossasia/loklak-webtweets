var ngApp = angular.module('loklak', []);

ngApp.controller("tweets", function($scope, $http) {
  $scope.results = [];
  var query = "#fossasia"; //modify this line to change the key word.
    
  $http.get('http://loklak.org/api/search.json?q=' + encodeURIComponent(query)).success(function(data, status, headers, config) {
      var i = 0;
    for (i = 0; i < data.statuses.length; i++) {
            $scope.results.push(data.statuses[i]);
    }
  });
});