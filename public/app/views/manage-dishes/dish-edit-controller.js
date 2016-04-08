app.controller('DishEditController', function($firebaseArray, $scope, $state, dish, DishService, CONSTANTS) {

    $scope.dish = dish
    $scope.units = [
        "Cup",
        "Teaspoon",
        "Tablespoon",
        "Ounce",
        "Pound",
    ]
    // $scope.selectOption = $scope.ingredient.unit
    $scope.dish.totalTime = $scope.dish.prepTime + $scope.dish.cookTime;

    $scope.test = function(updated, i) {
        $scope.dish.ingredients[i] = updated;

    }

    $scope.updateDish = function() {
        $scope.dish.$save().then(function(a, b) {
            $state.go("myDishDetails", { id: $state.params.id })
        })

    }
    
    $scope.removeDish = function() {
            $scope.dish.$remove().then(function() {
            $state.go("manageDishes")
        })

    }
    
    $scope.ratingStates = DishService.ratingStates

});

