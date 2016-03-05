app.controller('DishCreationController', function ($scope, $rootScope, CONSTANTS, $firebaseArray) {

    // links recipies/dishes from firebase
    // $scope.dishes = DataService.getDishes();
    

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
    $scope.testPush = function () {
        //GET LOCAL DISH FROM YOUR FORM
        $scope.dishList.$add($scope.localdish).then(function(dish){
            $rootScope.member.dishList = $rootScope.member.dishList || {}
            $rootScope.member.dishList[dish.key()] = $scope.localdish;
            $rootScope.member.creationDate = Date.now();
            $rootScope.member.$save();
        });
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

    //     $scope.rate = 7;
    //     $scope.max = 10;
    //     $scope.isReadonly = false;

    //     $scope.hoveringOver = function (value) {
    //     $scope.overStar = value;
    //     $scope.percent = 100 * (value / $scope.max);
    // };

    // $scope.ratingStates = [
    //     { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
    //     { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
    //     { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
    //     { stateOn: 'glyphicon-heart' },
    //     { stateOff: 'glyphicon-off' }
    // ];
  });