app.controller('DishCreationController', function ($scope, $rootScope, DishService, $firebaseArray) {

    // links recipies/dishes from firebase
     $scope.dishes = DishService.getDishes();

    $scope.createDish = function (newDish) {
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


//     $scope.rate = 0;
//     $scope.max = 5;
//     $scope.isReadonly = false;

//     $scope.hoveringOver = function (value) {
//         $scope.overStar = value;
//         $scope.percent = 100 * (value / $scope.max);
//     };

//   $scope.rate = 5;
//     $scope.max = 5;
//     $scope.isReadonly = false;

//     $scope.hoveringOver = function (value) {
//         $scope.overStar = value;
//         $scope.percent = 100 * (value / $scope.max);
//     };

    $scope.ratingStates = DishService.ratingStates;

  });