app.service('DishService', function($rootScope, $firebaseArray, $firebaseObject, CONSTANTS){
//  Public dishes   
    this.getDishes = function(){
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + '/dishes'));
    }
	
    this.getDish = function(id){
        return $firebaseObject(new Firebase(CONSTANTS.fbRef + '/dishes/' + id));
    }
   

//  Member Dishes
    this.getMyDishes = function(){
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + 'users/' + $rootScope.member.$id + '/dishList'));
    }
	
    this.getMyDish = function(id){
        return $firebaseObject(new Firebase(CONSTANTS.fbRef + 'users/'+ $rootScope.member.$id + '/dishList/' + id));
    }
    
// Grocery list
    this.getGroceryItems = function() {
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + 'users/' + $rootScope.member.$id + '/groceryList'));
    }
    this.getItems = function() {
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + 'users/' + $rootScope.member.$id + '/groceryList' + index));
    }
    
// The STARS

    this.rate = 7;
    this.max = 10;
    this.isReadonly = false;

    this.hoveringOver = function(value) {
        this.overStar = value;
        this.percent = 100 * (value / $scope.max);
    };

    this.ratingStates = [
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' }
    ];
    
      
})