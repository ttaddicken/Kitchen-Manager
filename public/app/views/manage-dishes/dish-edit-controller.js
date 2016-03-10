app.controller('DishEditController', function($firebaseArray, $scope, $state, dish, DishService, CONSTANTS) {

    $scope.dish = dish


    $scope.test = function(updated, i) {
        $scope.dish.ingredients[i] = updated;

    }

    $scope.updateDish = function() {
        $scope.dish.$save().then(function(a, b) {
            $state.go("myDishDetails", { id: $state.params.id })
        })

    }
    $scope.ratingStates = DishService.ratingStates

});

