app.controller('ManageDishesController', function ($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {

$scope.myDishes = DishService.getMyDishes()

$scope.ratingStates = DishService.ratingStates


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