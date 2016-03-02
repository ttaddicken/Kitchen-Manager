/* global Firebase */
app.controller('DishCreationController', function ($scope, $rootScope, CONSTANTS, $firebaseArray) {

    // links recipies/dishes from firebase
    // $scope.dishes = DataService.getDishes();
    

    // Create a recipe 
    $scope.createDish = function (newRecipe) {
        newRecipe.memberId = $rootScope.member.$id
        $scope.newRecipe.member = $rootScope.member;
        $scope.newRecipe.date = Date.now();
        $scope.recipes.$add(newRecipe).then(function (ref) {
            //Add the newly added recipe to the member object	
            $rootScope.member.recipes = $rootScope.member.recipes || {};
            //A dictonary structure is needed to add the recipeId to the member.recipes dictionary.  (ie our favorites)
            //To avoid duplicating data in our favorites database we only store the recipeId instead of the entire recipe again 
            $rootScope.member.recipes[ref.key()] = ref.key();
            $rootScope.member.$save();
        })
    }

    // clearRecipe()
    // $scope.clearDish = function (clearRecipe) {
    //     $rootScope.member.recipes[ref.key()] = '';
    // }    






    // WE NEED THESE FUNCTIONS:
    // addToFavorites()
    // addIngredient()
    // importToFavorites()

});