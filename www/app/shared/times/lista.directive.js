angular.module('app.directives')
  .directive('sharedTimesLista', SharedTimesLista);

function SharedTimesLista() {

  var directive = {
    templateUrl: 'app/shared/times/lista.html',
    restrict: 'E',
    scope: {
      times: '='
    }
  }

  return directive;
}
