app.controller('ApiController', function($scope,  $state, EdamamService){
	$scope.findDishes = function(){
		EdamamService.search($scope.query).success(function(results){
<<<<<<< HEAD
			
=======
			console.log(results);
>>>>>>> 959265df5fc4ef9d79c637ec001cad3d53711d26
			$scope.results = results.hits.map(function(hit){
				var dish = hit.recipe || {}
				//fix ingredients
				return {
					title: dish.label,
					img: dish.image,
					prepTime: '',
					cookTime: '',
					ingredients: dish.ingredientLines,
					instructionUrl: dish.shareAs,
					nutrientFacts: dish.digest,
					
				}
			});
		})
		
	}
	
	    $scope.saveRecipe = function(dish) {
			console.log(dish);
        $state.go("dishCreation");

    }
});	
	
					/*  MY DISH CREATION SCHEMA
					dish.img: dish.image,
					{{newDish.title}}
					{{newDish.prepTime}}
					{{newDish.cookTime}}
					
					cookTime: '',
					ingredients: recipe.ingredients,
					name: recipe.label,
					instructions: recipe.shareAs,
					nutrientFacts: recipe.facts,
					*/