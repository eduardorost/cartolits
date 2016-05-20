angular.module('app.controllers')
  .controller('campeonatoCtrl', function(cartolaLigaService) {
    cartolaLigaService.getLiga().then(function(response) {
      $scope.liga = response.data;
    }, function(response) {

    })
  });
