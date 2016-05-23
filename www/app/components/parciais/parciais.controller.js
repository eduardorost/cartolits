angular.module('app.controllers')
  .controller('parciaisCtrl', function($scope, cartolaLigaService, cartolaParciaisService, cartolaTimeService) {
    var vm = this;

    cartolaParciaisService.getParciais().then(function(response) {
      updateLiga(response.data);
    });

    function updateLiga(pontuados) {
      cartolaLigaService.getLiga().then(function(ligaResponse) {
        $scope.times = ligaResponse.data.times;
        $scope.times.forEach(function(time) {
          time.pontos = 0;
          updateTime(time, pontuados);
        })
      });
    }

    function updateTime(time, pontuados) {
      debugger;
      cartolaTimeService.getTime(time.slug).then(function(response) {
        response.data.atletas.forEach(function(atleta) {
          time.pontos += pontuados.atletas[atleta.atleta_id].pontuacao;
        });
      });
    }
  });
