app.controller('ManageDishesController', function($scope, DishService, CONSTANTS, $firebaseArray) {
    debugger
    $scope.dishes = DishService.getDishes();
    
    $scope.removeRecipe = function (index){
        $scope.dishes.splice(index,1)
    }
    $scope.dishList = $firebaseArray(new Firebase('https://kitchen-manager.firebaseio.com/' + 'dishes'));
    $scope.testPush= function(){
    debugger
   $scope.dishes = DishService.getDishes();
    $scope.dishList.$add(this.dishes);
    
    
}
})
//  Begginning of barrowed from firebase
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