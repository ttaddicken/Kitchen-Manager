/* global Firebase */
// app.controller('DishCreationController', function ($scope, $rootScope, $window, CONSTANTS, $firebaseArray, summernote) {

app.controller('DishCreationController', function ($scope, $rootScope, CONSTANTS, $firebaseArray) {

    // links recipies/dishes from firebase
    // $scope.dishes = DataService.getDishes();
    

    // Create a recipe 
    // $scope.createDish = function (newRecipe) {
    //     newRecipe.memberId = $rootScope.member.$id
    //     $scope.newRecipe.member = $rootScope.member;
    //     $scope.recipes.$add(newRecipe).then(function (ref) {
    //         //Add the newly added recipe to the member object	
    //         $rootScope.member.recipes = $rootScope.member.recipes || {};
    //         //A dictonary structure is needed to add the recipeId to the member.recipes dictionary.  (ie our favorites)
    //         //To avoid duplicating data in our favorites database we only store the recipeId instead of the entire recipe again 
    //         $rootScope.member.recipes[ref.key()] = ref.key();
    //         $rootScope.member.$save();
    //     })
    // }
        $scope.testPush = function () {
        //GET LOCAL DISH FROM YOUR FORM
        $scope.dishList.$add($scope.localdish).then(function(dish){
            $rootScope.member.dishList = $rootScope.member.dishList || {}
            $rootScope.member.dishList[dish.key()] = $scope.localdish;
            $rootScope.member.creationDate = Date.now();
            $rootScope.member.$save();
        });
    }

    // clearRecipe()
    // $scope.clearDish = function (clearRecipe) {
    //     $rootScope.member.recipes[ref.key()] = '';
    // }    






    // WE NEED THESE FUNCTIONS:
    // addToFavorites()
    // addIngredient()
    // importToFavorites()

});

    //CREATE A STAR RATING CAPABILITY
app.controller('StarController', function($scope, $window) {     
    $scope.rating = 5;
    $scope.saveRatingToServer = function(rating) {};
    //THIS DIRECTIVE BUILDS OUR STARS
    app.directive('ratingDirective', function () {
    return {
      restrict: 'A',
      templateUrl: '/app/views/stars/rating.html',
      scope: {
        ratingValue: '=',
        max: '=',
        readonly: '@',
        onRatingSelected: '&'
      },
      link: function (scope, elem, attrs) {

        var updateStars = function() {
          scope.stars = [];
          for (var  i = 0; i < scope.max; i++) {
            scope.stars.push({filled: i < scope.ratingValue});
          }
        };

        scope.toggle = function(index) {
          if (scope.readonly && scope.readonly === 'true') {
            return;
          }
          scope.ratingValue = index + 1;
          scope.onRatingSelected({rating: index + 1});
        };

        scope.$watch('ratingValue', function(oldVal, newVal) {
          if (newVal) {
            updateStars();
          }
        });
      }
    }
  })
  });