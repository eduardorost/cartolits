angular.module('app.services')
  .factory('interceptorService', Interceptor);

function Interceptor($window, TOKEN) {
  var interceptorService = {
    request: request
  };

  return interceptorService;

  function request(config) {
    config.headers = config.headers || {};
    config.headers['X-GLB-Token'] = TOKEN;

    return config;
  }

}


