var userApp = angular.module('UserApp', ['ngRoute', 'ngResource'])

angular.module('UserApp')

  .config(['$routeProvider',
    function config ($routeProvider) {
      $routeProvider.when('/users', {
        templateUrl: 'src/UserList/UserList.html',
        controller: 'UserListCtrl'
      }).when('/users/:userId', {
        templateUrl: 'src/UserDetail/UserDetail.html',
        controller: 'UserDetailCtrl'
      }).when('/edit/:userId', {
        templateUrl: 'src/EditUser/EditUser.html',
        controller: 'EditUserCtrl'
      }).when('/create', {
        templateUrl: 'src/CreateUser/CreateUser.html',
        controller: 'CreateUserCtrl'
      }).otherwise({
        redirectTo: '/'
      })
    }
  ])

  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common = {
      'application-id': '4B730C92-F81E-236B-FFF0-6651FE882800',
      'secret-key': 'CB6DE86C-6069-86C4-FF1C-9049D5AC9400'
    }
  }])
