angular.module('app.routes', [])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('menu.mes', {
        url: '/mes',
        views: {
          'side-menu21': {
            templateUrl: 'app/components/mes/mes.html',
            controller: 'mesCtrl'
          }
        }
      })

      .state('menu.saldo', {
        url: '/saldo',
        views: {
          'side-menu21': {
            templateUrl: 'app/components/saldo/saldo.html',
            controller: 'saldoCtrl'
          }
        }
      })

      .state('menu.campeonato', {
        url: '/campeonato',
        views: {
          'side-menu21': {
            templateUrl: 'app/components/campeonato/campeonato.html',
            controller: 'campeonatoCtrl'
          }
        }
      })

      .state('menu', {
        url: '/menu',
        templateUrl: 'app/components/menu/menu.html',
        abstract: true
      })

    $urlRouterProvider.otherwise('/menu/campeonato')
  });
