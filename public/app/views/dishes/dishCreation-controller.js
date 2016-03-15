app.controller('DishCreationController', function($scope, $rootScope, DishService, $firebaseArray) {
       

    // links recipies/dishes from firebase
    $scope.dishes = DishService.getDishes();

    $scope.createDish = function(newDish) {
        
        newDish.creationDate = Date.now();
        $scope.dishes.$add($scope.newDish).then(function(dish) {
            $rootScope.member.dishList = $rootScope.member.dishList || {}
            $rootScope.member.dishList[dish.key()] = $scope.newDish;
            $rootScope.member.$save();
            $scope.newDish = ''

        });
    }

    $scope.clearSearch = function() {
        $scope.newIngredient = '';

    }
  
    $scope.addIngredient = function(newIngredient) {
        debugger;
         $scope.newDish.ingredients =  $scope.newDish.ingredients || [];
        $scope.newDish.ingredients.push($scope.newIngredient);
        $scope.clearSearch()
    }


    $scope.ratingStates = DishService.ratingStates;

});