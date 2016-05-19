angular.module('app.services')
  .factory('interceptorService', Interceptor);

function Interceptor($window, $q) {
  var interceptorService = {
    response: response,
    request: request,
    responseError: responseError
  };

  return interceptorService;

  function response(response) {
    if (response && response.body) {
      var token = response.body.glbId;
      if (token) {
        console.log(token);
        $window.localStorage.token = token;
      }
    }

    return response;
  }

  function request(config) {
    config.headers = config.headers || {};

    if ($window.localStorage.token)
      config.headers['GLBID'] = $window.localStorage.token;

    return config;
  }

  function responseError(rejection) {
    if (null != rejection && 401 == rejection.status)
      delete $window.localStorage.token;

    return $q.reject(rejection);
  }
}


