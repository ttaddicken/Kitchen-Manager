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

					//fix nutrients
					Calories: dish.calories,
					TotalFat: dish.digest[0],
					carbohydrates: dish.digest[1].sub[1],
					fiber: dish.digest[1].sub[2],
					protein: dish.digest[2],
					cholesterol: dish.digest[3],
					sodium: dish.digest[4],
					calcium: dish.digest[5],
					sfat: dish.digest[6],
					potassium: dish.digest[7],
					iron: dish.digest[8],

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
		debugger;
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
