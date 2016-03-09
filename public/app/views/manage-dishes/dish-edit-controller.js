app.controller('MyDishDetails', function($firebaseArray, $scope, $state, dish, DishService, CONSTANTS) {

    // $scope.dishes = DishService.getDishes();
    //   $scope.dishList.$get(dishes);
    $scope.dish = dish
    // $scope.indatabase = $firebaseArray(new Firebase('https://kitchen-manager.firebaseio.com/dishes'));
    //  console.log($scope.indatabase, $scope.indatabase.length);

    $scope.test = function(updated, i){
       $scope.dish.ingredients[i] = updated;
        
    }

    $scope.updateDish = function() {
        $scope.dish.$save().then(function(a, b) {
            $state.go("myDishDetails", { id: $state.params.id })
        })

    }
$scope.ratingStates = DishService.ratingStates

});

