app.controller('DishDetails', function($firebaseArray, $scope, $rootScope, dish, DishService, CONSTANTS ) {

    // $scope.dishes = DishService.getDishes();
    //   $scope.dishList.$get(dishes);
    $scope.dish = dish
 $scope.indatabase = $firebaseArray(new Firebase('https://kitchen-manager.firebaseio.com/dishes'));
//  console.log($scope.indatabase, $scope.indatabase.length);

    $scope.importDish = function (dish) {
        //GET LOCAL DISH FROM YOUR FORM 
        // newDish.creationDate = Date.now();
        // $scope.dishes.$add($scope.newDish).then(function(dish){
            debugger;
            $rootScope.member.dishList = $rootScope.member.dishList || {}
            $rootScope.member.dishList[dish.$id] = dish;
            $rootScope.member.$save();
            // $scope.dish = ''

        // });
    }



});