angular.module('app.controllers')
  .controller('campeonatoCtrl', function($scope, cartolaLigaService) {
    var vm = this;
    cartolaLigaService.getLiga().then(function(response) {
      $scope.times = response.data.times.map(function(time) {
        time.pontos = time.pontos.campeonato;
        return time;
      });
    }, function(response) {

    });
  });
