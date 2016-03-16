app.controller('HomeController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {

    var activities = [
        "",
        "Activities",
        "Main Dish",
        "Side Dish",
        "Salad",
        "Dessert",
    ];

    var days = [
        "Day",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

// $scope.dishcard = "#eadcc3";
$scope.dishcard = "#CF000F";


    $scope.myDishes = DishService.getMyDishes()

    //  $scope.Calendar = [];
    // $state.go('defaults')
    $scope.grid = [];

    buildGrid();

    function buildGrid() {
        for (var row = 0, count=0; row < days.length; row++) {
            $scope.grid[row] = $scope.grid[row] || {id: row, cells:[]};
            for (var col = 0; col < activities.length; col++) {
                var column = col
                var obj = { row: row, col: column, id: row+''+col};
                if (col === 0) {
                    obj.header = $scope.dishcard;
                    obj.name = days[row];
                    obj.hideLg = true;
              
                }
                if (col !== 0 && row !== 0) {
                    obj.name = activities[col] + " : " + days[row];
                    obj.hideLgguts = true;
                } 
                if (col === 0) {
                    obj.name = days[row];
                    obj.hideSm = true;
                    obj.header = $scope.dishcard;
                } 
                $scope.grid[row].cells.push(obj);
            }
        }
        // console.log($scope.grid);
        return $scope.grid
    }


    // function buildGrid() {
    //     for (var row = 0; row < days.length; row++) {
    //         $scope.grid[row] = [];
    //         for (var col = 0; col < activities.length; col++) {
    //             var column = col
    //             var obj = { row: row, col: column };
    //             if (col === 0) {
    //                 obj.header = $scope.dishcard;
    //                 obj.name = days[row];
    //                 obj.hideLg = true;                    
    //             }
    //             if (row !== 0 && col !== 0) {
    //                 obj.name = days[row] + " : " + activities[col];
    //                 obj.hideLgguts = true;
                    
    //                 // obj.hideSm = true;
    //             } 
    //             if (row === 0) {
    //                 obj.name = activities[col];
    //                 obj.hideSm = true;
    //                 obj.header = $scope.dishcard;
    //             } 
    //             $scope.grid[row].push(obj);
    //         }
    //     }
    //     console.log($scope.grid);
    //     return $scope.grid
    

    // drag and drop functionality
    $scope.dragStart = function(event) {
        // console.log("WOrking")
        return
    }

    $scope.onDragComplete = function(dish, event, cell) {
        if (!cell.row || !cell.col) {
            return;
        }

        // console.log('Successfully moved dish to a dropable area');
        cell.dishes = cell.dishes || [];
        cell.dishes.push(dish);
        // console.log('DONE MOVING DISH TO MYDISHES');
    }

    $scope.moveDish = function(cell, index) {
        cell.dishes.splice(index);
    }

    $scope.calendar = [
        {
            "activities": {},
            "day": "Mon",
            "main": "blah",
            "sides": "basdf",
            "salads": "asdfsdf",
            "desserts": "sadfasdfd"
        }
    ]

    // creates grocerylist and pushes to firebase

    //creates groceryList Array on firebase
    $rootScope.groceryList = $rootScope.groceryList || {}

    //Adds Items to Grocery list --an item is an ingredient from myDishes

    $scope.createGroceryList = function(newItems) {
        $rootScope.member.groceryList = $rootScope.member.groceryList || [];
        var items = [];
        $scope.grid.forEach(function(row) {
            row.cells.forEach(function(cell) {
                if(cell.dishes){
                    cell.dishes.forEach(function(dish) {
                        if(dish.ingredients){
                            dish.ingredients.forEach(function(ing){
                                items.push(ing);
                            })
                        }
                    })
                }
            })
        })
        
        $rootScope.member.weeks = $rootScope.member.weeks || {};
        var calendarLayout = {
            name: $scope.name,
            grid: $scope.grid
        }
        $rootScope.member.weeks[$scope.name] = calendarLayout; 
        $rootScope.member.groceryList = items;
        $rootScope.member.$save();
    }

  
})




