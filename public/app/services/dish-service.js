app.service('DishService', function($rootScope, $firebaseArray, $firebaseObject, CONSTANTS){
//  Public dishes   
    this.getDishes = function(){
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + '/dishes'));
    }
	
    this.getDish = function(id){
        return $firebaseObject(new Firebase(CONSTANTS.fbRef + '/dishes/' + id));
    }
   
<<<<<<< HEAD
//    Member Dishes
=======
//  Member Dishes
>>>>>>> c4d3bce4f62cc6680d70ca811f44d32260d8bd34
    this.getMyDishes = function(){
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + 'users/' + $rootScope.member.$id + '/dishList'));
    }
	
    this.getMyDish = function(id){
        return $firebaseObject(new Firebase(CONSTANTS.fbRef + 'users/'+ $rootScope.member.$id + '/dishList/' + id));
    }
<<<<<<< HEAD
=======
    
//  STAR RATING   
 
 
 //CREATE A STAR RATING CAPABILITY TO CREATE A DISH **Also needed for Manage Dishes

    $scope.rate = 1;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-star fa-2x', stateOff: 'fa fa-lemon-o fa-2x' }
    ];
    
      
>>>>>>> c4d3bce4f62cc6680d70ca811f44d32260d8bd34
})