app.controller('ApiController', function($scope, $rootScope, $state, EdamamService, DishService, CONSTANTS, $firebaseArray){
	$scope.findDishes = function(){
		EdamamService.search($scope.query).success(function(results){
			
			console.log(results);

			$scope.results = results.hits.map(function(hit){
				var dish = hit.recipe || {}
				//fix ingredients
				return {
					title: dish.label,
					img: dish.image,
					prepTime: '',
					cookTime: '',
					servings: dish.yield,
					// ingredients: dish.ingredients,
					// name: dish.ingredients.food,
					// qty: dish.ingredients.quantity,
					// unit: dish.ingredients.unit,
					ingredients: dish.ingredientLines,
					// instructionUrl: dish.shareAs,
					instructions: dish.shareAs,
					
					nutrientFacts: dish.digest,
					Calories: dish.calories,
					TotalFat: dish.digest[0],
					sfat: dish.digest[6],
					cholesterol: dish.digest[3],
					carbohydrates: dish.digest[1].sub[1],
					protein: dish.digest[2],
					fiber: dish.digest[1].sub[2],
					sodium: dish.digest[4],
					potassium: dish.digest[7],
					calcium: dish.digest[5],
					iron: dish.digest[8],
							
				}
			});
		})
		
	}
	

	
	$scope.saveRecipe = function(dish) {
		debugger;
        $rootScope.member.dishList = $rootScope.member.dishList || {}
        $rootScope.member.dishList[dish.$id] = dish;

        $rootScope.member.$save().then(function(a, b) {
            $state.go("dishEdit", { id: $state.params.id })
			// ng-href="/#/manage-dishes/dish-edit/{{dish.$id}}"
        })
    }
        
     $scope.ratingStates = DishService.ratingStates

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
					
					dish.nutritionInfo[0].Calories: 
					dish.nutritionInfo[0].TotalFat:
					dish.sfat:
					dish.cholesterol:
					dish.carbohydrates:
					dish.protein:
					dish.fiber:
					dish.sodium:
					dish.potassium:
					dish.calcium:
					dish.iron:
					*/