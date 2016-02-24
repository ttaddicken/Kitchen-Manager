app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/app/views/home/home.html',
            controller: 'HomeController',
            controllerAs: 'hc'
        })
        .state('favorites', {
            url: '/favorites',
            templateUrl: '/app/views/favorites/favorites.html',
            controller: 'FavoritesController',
            controllerAs: 'fc'
        })
        .state('grocery', {
            url: '/grocery',
            templateUrl: '/app/views/grocery/grocery.html',
            controller: 'GroceryController',
            controllerAs: 'gc'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/app/views/login/login.html',
            controller: 'RegistrationController',
            controllerAs: 'rc'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: '/app/views/profile/profile.html',
            controller: 'ProfileController',
            controllerAs: 'pc'
        })
        .state('registration', {
            url: '/registration',
            templateUrl: '/app/views/registration/registration.html',
            controller: 'RegistrationController',
            controllerAs: 'rc'
        })
        .state('defaults', {
            url: '/defaults',
            templateUrl: '/app/views/defaults/defaults.html',
            controller: 'RegistrationController',
            controllerAs: 'rc'
        })
        .state('dishCreation', {
            url: '/dish-creation',
            templateUrl: '/app/views/dishes/dishCreation.html',
            controller: 'DishCreationController',
            controllerAs: 'dc'
        })
        .state('manageDishes', {
            url: '/manage-dishes',
            templateUrl: '/app/views/dishes/manageDishes.html',
            controller: 'ManageDishesController',
            controllerAs: 'mc'
        })
})

// Sets auto Login
app.run(function ($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        var invalidUser = AuthService.authMember();
        if (invalidUser) {
            //FORCES AUTHENTICATION
            if (toState.name !== 'login') {
                event.preventDefault()
                $state.go('login')
            }
        }
    });
})