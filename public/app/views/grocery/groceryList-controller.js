app.controller('GroceryController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {
   $scope.checkboxModel = {};
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

    this.getGroceryItems = function() {
        return $rootScope.member.groceryList = items;
        // debugger;
        // return groceryItems;
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