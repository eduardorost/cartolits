angular.module('app.services')
  .factory('cartolaTimeService', CartolaTimeService);

function CartolaTimeService($http) {
  var cartolaTimeService = {
    getTime: getTime
  };

  return cartolaTimeService;

  function getTime(slug) {
    return $http.get('https://api.cartolafc.globo.com/time/'+slug);
  }
}
