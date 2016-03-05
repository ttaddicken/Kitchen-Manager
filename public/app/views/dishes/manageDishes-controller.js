app.controller('ManageDishesController', function ($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {

    $scope.removeDish = function (index) {
        $scope.dishes.splice(index, 1)
    }
    
    // $scope.publicDishList = $firebaseArray(new Firebase('https://kitchen-manager.firebaseio.com/dishes'));
    
    $scope.testPush = function () {
        //GET LOCAL DISH FROM YOUR FORM
        $scope.dishList.$add($scope.localdish).then(function (dish) {
            $rootScope.member.dishList = $rootScope.member.dishList || {}
            $rootScope.member.dishList[dish.key()] = $scope.localdish;
            $rootScope.member.$save();
        });
    }
    $scope.options = {
        height: 56,
        width: 56,
        focus: true
    };
    
    // $('#summernote').summernote({
    //     height: 150,                 // set editor height
    //     minHeight: null,             // set minimum height of editor
    //     maxHeight: null,             // set maximum height of editor
    //     focus: true                  // set focus to editable area after initializing summernote
    // });
    
})
//  Begginning of borrowed from firebase
// {
//   "rules": {
//     "users": {
//       "$uid": {
//         ".read": "auth != null && auth.uid == $uid"
//       }
//     },
//     "dishes": {
//       "$uid": {
//         ".read": "auth != null && auth.uid == $uid"
        
//       }
//     }
//   }
// }
// End of barroweed from firebase