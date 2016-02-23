app.controller('ManageDishesController', function($scope, RecipeService) {
    
    $scope.recipes = RecipeService.getRecipes();
    
    $scope.removeRecipe = function (index){
        $scope.recipes.splice(index,1)
    }
    
})