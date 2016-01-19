(function() {
  'use strict';
  angular
  .module('portfolio', [
    'ngResource',
    'ui.router',
    'projects'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ]);


  function RouterFunction($stateProvider){
    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'js/home/home.html'
    })
    .state('projects',{
      url: '/projects',
      templateUrl: 'js/projects/projects.html',
      controller: 'projectsController',
      controllerAs: 'projectsViewModel'
    })
    .state('about',{
      url: '/about',
      templateUrl: 'js/about/about.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'js/contact/contact.html'
    });
  }
})();
