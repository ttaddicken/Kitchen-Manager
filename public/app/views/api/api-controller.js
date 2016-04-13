app.controller('ApiController', function ($scope, $rootScope, $state, EdamamService, DishService, CONSTANTS, $firebaseArray) {

	$scope.myDishes = DishService.getMyDishes();

	$scope.findDishes = function () {
		EdamamService.search($scope.query).success(function (results) {
			$scope.results = results.hits.map(function (hit) {
				var dish = hit.recipe || {}
				console.log(dish);
				// fixIngrids(dish);	

				return {
					title: dish.label,
					img: dish.image,
					prepTime: '',
					cookTime: '',
					servings: dish.yield,
					ingredientLines: dish.ingredientLines,
					ingredients: dish.ingredients,
					instructions: dish.shareAs,
					instructionUrl: dish.shareAs,
					nutrientFacts: dish.digest,
					// nutrientFacts: dish.totalNutrients,
									
					//Primary Nutrients
					/*
					Calories: dish.totalNutrients.KCAL,
					TotalFat: dish.totalNutrients.FAT,
					monounsaturatedFat: dish.totalNutrients.FAMS,
					polyunsaturatedFat: dish.totalNutrients.FAPU,
					transFat: dish.totalNutrients.FATRN,
					sfat: dish.totalNutrients.FASAT,
					cholesterol: dish.totalNutrients.CHOLE,
					carbohydrates: dish.totalNutrients.CHOCDF,
					protein: dish.totalNutrients.PROCNT,
					fiber: dish.totalNutrients.FIBTG,
					sodium: dish.totalNutrients.NA,
					potassium: dish.totalNutrients.K,
					calcium: dish.totalNutrients.CA,
					iron: dish.totalNutrients.FE,
					// Secondary Nutrients
					folicAcid: dish.totalNutrients.FOL,
					magnesium: dish.totalNutrients.MG,
					niacin: dish.totalNutrients.NIA,
					phosphorus: dish.totalNutrients.P,
					riboflavin: dish.totalNutrients.RIBF,
					sugar: dish.totalNutrients.SUGAR,
					thiamin: dish.totalNutrients.THIA,
					vitaminE: dish.totalNutrients.TOCPHA,
					vitaminA: dish.totalNutrients.VITA_RAE,
					vitaminB6: dish.totalNutrients.VITB6A,
					vitaminB12: dish.totalNutrients.VITB12,
					vitaminC: dish.totalNutrients.VITC,
					vitaminD: dish.totalNutrients.VITD,
					vitaminK1: dish.totalNutrients.VITK1,
					zinc: dish.totalNutrients.ZN,
					*/
				};
			});
		})
	};



	// var ingredients = [];

	var fixIngrids = function (dish) {
		var ingredients = dish.ingredients;

		var ingredient = {
			qty: "",
			name: "",
			unit: ""
		};

		for (var i = 0; i < ingredients.length; i++) {
			var current = dish.ingredients[i];

			ingredients.forEach(function (ingredient, i) {
				for(var prop in ingredient){
					if (ingredient.hasOwnProperty(prop)) {
						if (prop === "text") {
							dish.ingredients[i].name = dish.ingredients[i].text;
						}
						if (prop === "quantity") {
							dish.ingredients[i].qty = dish.ingredients[i].quantity;
						}
						if (prop === "measure") {
							dish.ingredients[i].unit = dish.ingredients[i].measure;
						}
					}
				}
			})
		};
		console.log("New = ", ingredients);
	}



	$scope.saveRecipe = function (dish) {
		fixIngrids(dish);
		dish.creationDate = Date.now();
		
		$scope.myDishes.$add(dish).then(function (ref) {
			$state.go("manageDishes", { id: ref.key() })
		})
	}

	$scope.ratingStates = DishService.ratingStates

});
/*
var ingredients = [];

	var fixIngrids = function(dish) {
		var ingredient = {
			qty: "",
			name: "",
			unit: ""
		};
		for (var i = 0; i < dish.ingredients.length; i++) {
			var current = dish.ingredients;
			for (var prop in current) {
				debugger;
				if (current.hasOwnProperty(prop)) {
					var prop = prop;
					if (prop === "text") {
						ingredient.name = dish.ingredients[i].text;
					}
					if (prop === "quantity") {
						ingredient.qty = dish.ingredients[i].quantity;
					}
					if (prop === "measure") {
						ingredient.unit = dish.ingredients[i].measure;
					}


				}
			}
		}
		ingredients.push(ingredient);
		console.log("New = ", ingredients);
	};
*/
