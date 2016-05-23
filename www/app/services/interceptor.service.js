angular.module('app.services')
  .factory('interceptorService', Interceptor);

function Interceptor($window, TOKEN) {
  var interceptorService = {
    request: request
  };

  return interceptorService;

  function request(config) {
    var url = config.url;
    if (url.indexOf('app/') <= 0) {
      config.headers = config.headers || {};
      config.headers['X-GLB-Token'] = TOKEN;
    }

    return config;
  }

}


