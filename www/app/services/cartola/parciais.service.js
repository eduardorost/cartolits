angular.module('app.services')
  .factory('cartolaParciaisService', CartolaParciaisService);

function CartolaParciaisService($http) {
  var cartolaParciaisService = {
    getParciais: getParciais
  };

  return cartolaParciaisService;

  function getParciais() {
    return $http.get('https://api.cartolafc.globo.com/atletas/pontuados');
  }
}
