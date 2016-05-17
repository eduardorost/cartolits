// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

  // app.run(['$rootScope', '$window', 'srvAuth',
  .run(function($window, $rootScope, $ionicPlatform, srvAuth) {

    $rootScope.user = {};

    $window.fbAsyncInit = function() {
      // Executed when the SDK is loaded

      FB.init({
        /*
         The app id of the web app;
         To register a new app visit Facebook App Dashboard
         ( https://developers.facebook.com/apps/ )
        */
        appId: '242781509416651',
        /*
         Adding a Channel File improves the performance
         of the javascript SDK, by addressing issues
         with cross-domain communication in certain browsers.
        */
        channelUrl: 'app/channel.html',
        /*
         Set if you want to check the authentication status
         at the start up of the app
        */
        status: true,

        /*
         Enable cookies to allow the server to access
         the session
        */
        cookie: true,
        version: 'v2.4',

        /* Parse XFBML */
        xfbml: true
      });

      srvAuth.watchAuthenticationStatusChange();
    };

    (function(d) {
      // load the Facebook javascript SDK

      var js,
        id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = "//connect.facebook.net/en_US/sdk.js";

      ref.parentNode.insertBefore(js, ref);

    } (document));

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
