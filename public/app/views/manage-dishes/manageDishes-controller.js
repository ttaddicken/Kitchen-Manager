app.controller('ManageDishesController', function ($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {

$scope.myDishes = DishService.getMyDishes()

$scope.ratingStates = DishService.ratingStates

$scope.sortType     = 'dish.title'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchDish   = '';     // set the default search/filter term
})

// //  Beginning of borrowed from firebase
// // {
// //   "rules": {
// //     "users": {
// //       "$uid": {
// //         ".read": "auth != null && auth.uid == $uid"
// //       }
// //     },
// //     "dishes": {
// //       "$uid": {
// //         ".read": "auth != null && auth.uid == $uid"
        
// //       }
// //     }
// //   }
// // }
// // End of borrowed from firebase