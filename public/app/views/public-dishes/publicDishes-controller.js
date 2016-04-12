app.controller('PublicDishesController', function ($firebaseArray, $scope, DishService, CONSTANTS ) {

    // $scope.dishes = DishService.getDishes();
    //   $scope.dishList.$get(dishes);
 $scope.indatabase = DishService.getDishes();
//  console.log($scope.indatabase, $scope.indatabase.length);
});


// The following is a Temporary paste while working with the API

//  app.controller('ApiController', function($scope,  $state, EdamamService){
// 	$scope.findDishes = function(){
// 		EdamamService.search($scope.query).success(function(results){
			
// 			console.log(results);

// 			$scope.results = results.hits.map(function(hit){
// 				var dish = hit.recipe || {}
// 				//fix ingredients
// 				return {
// 					title: dish.label,
// 					img: dish.image,
// 					prepTime: '',
// 					cookTime: '',
// 					ingredients: dish.ingredientLines,
// 					instructionUrl: dish.shareAs,
// 					nutrientFacts: dish.digest,
					
// 				}
// 			});
// 		})
		
// 	}
	
// 	    $scope.saveRecipe = function(dish) {
// 			console.log(dish);
//         $state.go("dishCreation");

//     }
// });	
	