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
					ingredients: dish.ingredientLines,
					instructionUrl: dish.shareAs,
					nutrientFacts: dish.digest,
					
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
					*/