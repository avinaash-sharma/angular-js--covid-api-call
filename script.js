var myApplication = angular.module("myApplication", []);
const url = "https://covid19.mathdro.id/api";
myApplication.controller("myController", function ($scope, $http) {
  $http.get(url).then(function (response) {
    console.log(response);
    $scope.allData= response.data;
  }, function(error){
      console.log(error);
  });

  $scope.onChange =  function() {
    var country = $scope.country
      console.log('==>',country);
      $http.get(`${url}/countries/${country}`).then(response => {
        console.warn($scope.country ,'->', response.data);
          $scope.countryData = response.data;
      }, function(error){
        console.log(error);
      })
  }
});
