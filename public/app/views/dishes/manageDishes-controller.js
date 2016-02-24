app.controller('ManageDishesController', function($scope, DishService, CONSTANTS, $firebaseArray) {
 
    $scope.dishes = DishService.getDishes();
    
    $scope.removeRecipe = function (index){
        $scope.dishes.splice(index,1)
    }
    $scope.dishList = $firebaseArray(new Firebase('https://kitchen-manager.firebaseio.com/' + 'dishes'));
    $scope.testPush= function(){

   $scope.dishes = DishService.getDishes();
    $scope.dishList.$add(this.dishes);
    
    
}
})
//  Begginning of borrowed from firebase
// {
//   "rules": {
//     "users": {
//       "$uid": {
//         ".write": "auth != null && auth.uid == $uid"
//       }
//     },
//     "dishes": {
//       "$uid": {
//         ".write": "auth != null && auth.uid == $uid"
        
//       }
//     }
//   }
// }
// End of barroweed from firebase