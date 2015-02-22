var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        .state('state', {
            url: '/state/:stateId',
            template: '<h1>Welcome to state:{{stateId}}</h1><a ui-sref="state({ stateId: {{stateId}}+1 })" class="btn btn-primary">Go to state {{stateId+1}}</a>',
            controller: function($scope, $stateParams) {
              $scope.stateId = parseInt($stateParams.stateId);
          }        

      });
        
    });