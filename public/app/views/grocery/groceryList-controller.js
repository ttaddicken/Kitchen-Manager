app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray){
    
    $scope.groceryItems = [
        {store:'Wal-Mart',
        section: 'produce',
        name:'baby carrots',
        quantity: '',
        price: '',
        completed: false
        },{
        store:'WinCo',
        section: 'dairy',
        name:'milk',
        quantity: '',
        price: '',
        completed: false  
        },{
        store:'WinCo',
        section: 'butcher',
        name:'ground beef',
        quantity: '2 pounds',
        price: '',
        completed: false  
        },{
        store:'WinCo',
        section: 'bakery',
        name:'cupcakes',
        quantity: '1 dozen',
        price: '',
        completed: false  
        }]
    
    this.getGroceryItems = function(){
        return groceryItems;
    }
    
    // $scope.myDishes = DishService.getMyDishes()
    
    $scope.completedItems = [];

    $scope.updateCompletedItems = function(index, item){
        $scope.groceryItems.splice(index,1);
        $scope.completedItems.push(item);
        
        // $scope.groceryItems.splice(index,1).then(function(){
        //     $scope.completedItems.push(index)
        // })
        
        // for(var i = 0; i < $scope.groceryItems.length; i++){

        //     if($scope.groceryItems[i] == index){
        //         debugger;
        //         $scope.groceryItems.splice(index,1);
        //         $scope.completedItems.push(groceryItems);
        //     }
        // }
        
        
        }

    
    
 
})