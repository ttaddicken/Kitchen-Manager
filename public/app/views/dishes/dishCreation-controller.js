app.controller('DishCreationController', function($scope, $rootScope, DataService) {

// links recipies/dishes from firebase
$scope.dishes = DataService.getDishes();


// ADD createRecipe() function **need to determine how firebase defines our "userName through registration() on login page.
	  $scope.addRecipe = function(newRecipe){
	 	newRecipe.memberId = $rootScope.member.$id
        $scope.newRecipe.userName = $rootScope.userName; 
        $scope.newRecipe.date = Date.now();
	 	$scope.recipes.$add(newRecipe).then(function(ref){
	  	  //Add the newly added recipe to the member object	
	  	  $rootScope.member.recipes = $rootScope.member.recipes || {};
	    //An dictonary structure is needed to add the recipeId to the member.recipes dictionary.  (ie our favorites)
	     //To avoid duplicating data in our favorites database we only store the questionId instead of the entire question again 
	     $rootScope.member.recipes[ref.key()] = ref.key();
	     $rootScope.member.$save();

         })
      
      }

// clearRecipe()
    $scope.clearRecipe = function(clearRecipe){
        
    }    


// WE NEED THESE FUNCTIONS:
// addToFavorites()
// addIngredient()
// importToFavorites()

    });