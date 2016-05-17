angular.module('app.controllers', ['app.services'])

  .controller('mSCtrl', function($scope) {

  })

  .controller('saldoCtrl', function($scope, facebookService) {
    facebookService.getMyLastName()
      .then(function(response) {
        $scope.last_name = response.last_name;
      });
  })

  .controller('campeonatoCtrl', function($scope) {

  })

  .controller('loginCtrl', function($scope) {
    $scope.fbLogin = function() {
      //   // ngFB.login({ scope: 'email,read_stream,publish_actions' }).then(
      FB.login().then(function(response) {
        if (response.status === 'connected') {
          console.log('Facebook login succeeded');
          $scope.closeLogin();
        } else {
          alert('Facebook login failed');
        }
      });
    }
  })
