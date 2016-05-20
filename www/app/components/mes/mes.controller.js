angular.module('app.controllers')
  .controller('mesCtrl', function($scope, cartolaLigaService) {
    $scope.times = cartolaLigaService.getLiga().then(function(response) {
      $scope.times = response.data.times.map(function(time) {
        time.pontos = time.pontos.mes;
        return time;
      });
    }, function(response) {

    });
  });
