app.controller('DishCreationController', function ($scope, $rootScope, DishService, $firebaseArray) {

    // links recipies/dishes from firebase
     $scope.dishes = DishService.getDishes();
    

    // Create a recipe 
    // $scope.createDish = function (newRecipe) {
    //     newRecipe.memberId = $rootScope.member.$id
    //     $scope.newRecipe.member = $rootScope.member;
    //     $scope.recipes.$add(newRecipe).then(function (ref) {
    //         //Add the newly added recipe to the member object	
    //         $rootScope.member.recipes = $rootScope.member.recipes || {};
    //         //A dictonary structure is needed to add the recipeId to the member.recipes dictionary.  (ie our favorites)
    //         //To avoid duplicating data in our favorites database we only store the recipeId instead of the entire recipe again 
    //         $rootScope.member.recipes[ref.key()] = ref.key();
    //         $rootScope.member.$save();
    //     })
    // }
    $scope.createDish = function (newDish) {
        //GET LOCAL DISH FROM YOUR FORM
        newDish.creationDate = Date.now();
        $scope.dishes.$add($scope.newDish).then(function(dish){
            $rootScope.member.dishList = $rootScope.member.dishList || {}
            $rootScope.member.dishList[dish.key()] = $scope.newDish;
            $rootScope.member.$save();
            $scope.newDish = ''

        });
    }
    
    $scope.clearSearch = function() {
        $scope.newIngredient = '';
}

    // clearRecipe()
    // $scope.clearDish = function (clearRecipe) {
    //     $rootScope.member.recipes[ref.key()] = '';
    // }    






    // WE NEED THESE FUNCTIONS:
    // addToFavorites()
    // addIngredient()
    // importToFavorites()

// });

//CREATE A STAR RATING CAPABILITY TO CREATE A DISH **Also needed for Manage Dishes

    $scope.rate = 0;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

  $scope.rate = 5;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' }
    ];
// })
  });