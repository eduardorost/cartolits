angular.module('app.controllers')
  .controller('loginCtrl', function($scope) {
    $scope.login = function(usuario) {
      alert(usuario);
    }
  });
