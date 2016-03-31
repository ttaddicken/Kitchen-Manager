app.controller('ApiController', function($scope, $rootScope, $state, EdamamService, DishService, CONSTANTS, $firebaseArray) {
	$scope.findDishes = function() {
		EdamamService.search($scope.query).success(function(results) {


			$scope.results = results.hits.map(function(hit) {
				var dish = hit.recipe || {}
				fixIngrids(dish);
				
				return {
					title: dish.label,
					img: dish.image,
					prepTime: '',
					cookTime: '',
					servings: dish.yield,
					ingredy: dish.ingredientLines,
					ingredients: ingredients,
					instructions: dish.shareAs,
					instructionUrl: dish.shareAs,
					nutrientFacts: dish.digest,
					
					//fix nutrients
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

				};



			});
		})

	};
	var ingredients = [];

	var fixIngrids = function(dish) {
		var ingredient = {
			qty: "",
			name: "",
			unit: ""
		};
		for (var i = 0; i < dish.ingredients.length; i++) {
			var current = dish.ingredients[i];

			for (var prop in current) {
				if (current.hasOwnProperty(prop)) {
					var newprop = prop;
					if (newprop === "quantity") {
						ingredient.qty = dish.ingredients[i].quantity;
					}
					if (newprop === "measure") {
						ingredient.unit = dish.ingredients[i].measure;
					}
					if (newprop === "food") {
						ingredient.name = dish.ingredients[i].food;
					}


				}
			}
		}
		ingredients.push(ingredient);
		console.log("New = ", ingredient);
	};
	
	$scope.saveRecipe = function(dish) {
		dish.creationDate = Date.now();
		// var dish = $firebaseObject(ref);
		
		// need to enforce forebase to create an ID
        $rootScope.member.dishList = $rootScope.member.dishList || {}
        $rootScope.member.dishList[dish.$id] = dish;
		// $rootScope.member.dishList[dish.key()] = $scope.newDish;
        $rootScope.member.$save().then(function(a, b, ref) {
            $state.go("manageDishes", { id: $state.params.id })
        })
    }
	
	$scope.ratingStates = DishService.ratingStates

});


	// $scope.createDish = function(newDish) {
        
    //     newDish.creationDate = Date.now();
    //     $scope.dishes.$add($scope.newDish).then(function(dish) {
    //         $rootScope.member.dishList = $rootScope.member.dishList || {}
    //         $rootScope.member.dishList[dish.key()] = $scope.newDish;
    //         $rootScope.member.$save();
    //         $scope.newDish = ''

    //     });

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