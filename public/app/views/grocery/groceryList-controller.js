<<<<<<< HEAD
app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {
   $scope.checkboxModel = {};
=======
app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray){
    
>>>>>>> 3487a77888d3666f80bc94b32624b24535ba6af6
    // $scope.groceryItems = [
    //     {store:'Wal-Mart',
    //     section: 'produce',
    //     name:'baby carrots',
    //     quantity: '',
    //     price: '',
    //     completed: false
    //     },{
    //     store:'WinCo',
    //     section: 'dairy',
    //     name:'milk',
    //     quantity: '',
    //     price: '',
    //     completed: false  
    //     },{
    //     store:'WinCo',
    //     section: 'butcher',
    //     name:'ground beef',
    //     quantity: '2 pounds',
    //     price: '',
    //     completed: false  
    //     },{
    //     store:'WinCo',
    //     section: 'bakery',
    //     name:'cupcakes',
    //     quantity: '1 dozen',
    //     price: '',
    //     completed: false  
    //     }]
<<<<<<< HEAD

    this.getGroceryItems = function() {
        return $rootScope.member.groceryList = items;
        // debugger;
        // return groceryItems;
=======
    
    this.getGroceryItems = function(){
        return groceryItems;
>>>>>>> 3487a77888d3666f80bc94b32624b24535ba6af6
    }

    // $scope.myDishes = DishService.getMyDishes()

    $scope.completedItems = [];

    $scope.updateCompletedItems = function(index, item) {
        // $scope.checkboxModel = {
        //     value: 'NO'
        // };
        $rootScope.member.groceryList.splice(index, 1);
        $scope.completedItems.push(item);
        debugger;
        $scope.checkboxModel.value = "NO";
    }




})