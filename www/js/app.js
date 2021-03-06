// Hacker News Reader App

// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('news', {
    url: '/news',
	templateUrl: 'templates/newsList.html',
	controller: 'NewsCtrl'
  })

  .state('passage', {
	url: '/passage/:id',
	controller: 'PassageCtrl',
	templateUrl: 'templates/passage.html'
  })

  .state('comments', {
	url: '/comments',
  	controller: 'CommentCtrl',
	templateUrl: 'templates/comments.html',
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/news');

});

// define global variables
var PASSAGE_INFO = {
  'id': '',	   // current passage's id
  'title': '', // current passage's title
  'url': ''	   // current passage's url
};	
var SCROLL_POSITION = '';	// remember the scroll position of the newslist page

// set font size
window.localStorage['fontSize'] = window.localStorage['fontSize'] || 16;

