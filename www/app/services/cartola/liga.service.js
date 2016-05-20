angular.module('app.services')
  .factory('cartolaLigaService', CartolaLigaService);

function CartolaLigaService($http) {
  var cartolaLigaService = {
    getLiga: getLiga
  };

  return cartolaLigaService;

  function getLiga() {
    return $http.get('https://api.cartolafc.globo.com/auth/liga/terrorits-rs');
  }
}
