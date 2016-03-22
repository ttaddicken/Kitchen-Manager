app.controller('PublicDishesController', function ($firebaseArray, $scope, DishService, CONSTANTS ) {

    // $scope.dishes = DishService.getDishes();
    //   $scope.dishList.$get(dishes);
 $scope.indatabase = DishService.getDishes();
//  console.log($scope.indatabase, $scope.indatabase.length);
});

app.controller('ApiController', function($scope, EdamamService){
	$scope.findDishes = function(){
		EdamamService.search($scope.query).success(function(results){
				debugger
			$scope.results = results.hits.map(function(hit){
				var recipe = hit.recipe || {}
				//fix ingredients
				return {
					img: recipe.image,
					prepTime: '',
					cookTime: '',
					ingredients: recipe.ingredients,
					name: recipe.label,
					instructions: recipe.shareAs,
					nutrientFacts: recipe.facts,
					
				}
			});
		})
		
	}
});	