app.service('DishService', function($firebaseArray, $firebaseObject, CONSTANTS){
    
    this.getDishes = function(){
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + '/dishes'));
    }
	
    this.getDish = function(id){
        return $firebaseObject(new Firebase(CONSTANTS.fbRef + '/dishes/' + id));
    }
           
})