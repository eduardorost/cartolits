angular.module('app.routes', [])
  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('menu.mS', {
        url: '/mes',
        views: {
          'side-menu21': {
            templateUrl: 'templates/mS.html',
            controller: 'mSCtrl'
          }
        }
      })

      .state('menu.saldo', {
        url: '/saldo',
        views: {
          'side-menu21': {
            templateUrl: 'templates/saldo.html',
            controller: 'saldoCtrl'
          }
        }
      })

      .state('menu.campeonato', {
        url: '/campeonato',
        views: {
          'side-menu21': {
            templateUrl: 'templates/campeonato.html',
            controller: 'campeonatoCtrl'
          }
        }
      })

      .state('menu', {
        url: '/menu',
        templateUrl: 'templates/menu.html',
        abstract: true
      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

    $urlRouterProvider.otherwise('/login')
  });
