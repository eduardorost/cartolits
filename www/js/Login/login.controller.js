angular.module('app.controllers')
  .controller('loginCtrl', function() {
    this.login = function(usuario) {
      alert(JSON.stringify(usuario));
    }
  });
