app.controller('ManageDishesController', function($scope, RecipeService) {
    
    $scope.recipies = RecipeService.getRecipes();
    
})