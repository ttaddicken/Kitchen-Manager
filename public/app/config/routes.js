app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'/app/views/login/login.html',
            controller: 'loginController',
            controllerAs: 'lc'
        })
        .state('favorites',{
            url:'/favorites',
            templateUrl:'/app/views/favorites/favorites.html',
            controller: 'favoritesController',
            controllerAs: 'fc'
        })
    	.state('grocery',{
            url:'/grocery',
            templateUrl: '/app/views/grocery/grocery.html',
            controller: 'groceryController',
            controllerAs: 'gc'
        }) 
        .state('login',{
            url:'/login',
            templateUrl: '/app/views/login/login.html',
            controller: 'loginController',
            controllerAs: 'lc'
        }) 
        .state('profile',{
            url:'/profile',
            templateUrl: '/app/views/profile/profile.html',
            controller: 'profileController',
            controllerAs: 'pc'
        }) 
        .state('registration',{
            url:'/registration',
            templateUrl: '/app/views/registration/registration.html',
            controller: 'registrationController',
            controllerAs: 'rc'
        }) 
        .state('dishCreation',{
            url:'/dish-creation',
            templateUrl: '/app/views/dishes/dishCreation.html',
            controller: 'dishCreationController',
            controllerAs: 'dc'
        }) 
        .state('manageDishes',{
            url:'/manage-dishes',
            templateUrl: '/app/views/dishes/manageDishes.html',
            controller: 'manageDishesController',
            controllerAs: 'mc'
        }) 
})