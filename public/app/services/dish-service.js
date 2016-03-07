app.service('DishService', function($rootScope, $firebaseArray, $firebaseObject, CONSTANTS){
//  Public dishes   
    this.getDishes = function(){
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + '/dishes'));
    }
	
    this.getDish = function(id){
        return $firebaseObject(new Firebase(CONSTANTS.fbRef + '/dishes/' + id));
    }
   
//    Member Dishes
    this.getMyDishes = function(){
        debugger;
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + 'users/' + $rootScope.member.$id + '/dishList'));
    }
	
    this.getMyDish = function(id){
        return $firebaseObject(new Firebase(CONSTANTS.fbRef + 'users/'+ $rootScope.member.$id + '/dishList/' + id));
    }
})