app.controller('DishDetails', function($firebaseArray, $scope, $rootScope, dish, DishService, CONSTANTS, $state) {

    $scope.dish = dish
    $scope.indatabase = $firebaseArray(new Firebase('https://kitchen-manager.firebaseio.com/dishes'));


    $scope.importDish = function(dish) {
        $rootScope.member.dishList = $rootScope.member.dishList || {}
        $rootScope.member.dishList[dish.$id] = dish;

        $rootScope.member.$save().then(function(a, b) {
            debugger;
            $state.go("publicDishes", { id: $state.params.id })
        })

    }

});