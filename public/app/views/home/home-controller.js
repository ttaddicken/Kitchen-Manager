app.controller('HomeController', function($rootScope, $state, $scope, DishService, CONSTANTS, $firebaseArray) {
// 
    $scope.parent = {
    flexDirection:  'row',
    flexWrap:       'nowrap',
    justifyContent: 'flex-start',
    alignItems:     'stretch',
    alignContent:   'stretch'
  };
  
  $scope.children_width = 12; // %

  $scope.children  = [];

var addChild = function (order, flexGrow, flexShrink, flexBasis, alignSelf) {
    $scope.children.push({
      order:      order      || 0,
      flexGrow:   flexGrow   || 0,
      flexShrink: flexShrink || 1,
      flexBasis:  flexBasis  || 'auto',
      alignSelf:  alignSelf  || 'auto'
    });
  };
  var removeChild = function (index) {
    $scope.children.splice(index, 1);
  };

  $scope.addChild    = addChild;
  $scope.removeChild = removeChild;

  for (var i = 0; i < 5; i++) {
    addChild();
  }
    

//  end of flex
    var activities = [
        "Day",
        "Activities",
        "Main Dish",
        "Side Dish",
        "Salad",
        "Dessert",
    ];

    var days = [
        "",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    $scope.dishcard = "#CF000F";
    $scope.myDishes = DishService.getMyDishes()
    $scope.grid = [];

    buildGrid();

    function buildGrid() {
        for (var col = 0; col < activities.length; col++) {
            $scope.grid[col] = $scope.grid[col] || { id: col, cells: [] };
            for (var row = 0; row < days.length; row++) {
                var obj = { col: col, row: row, id: col + '' + row };
                if (row === 0) {
                    obj.header = $scope.dishcard;
                    obj.name = activities[col];
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
                $scope.grid[col].cells.push(obj);
            }
        }
        console.log($scope.grid);
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
        if (dish) {
            // console.log('Successfully moved dish to a dropable area');
            cell.dishes = cell.dishes || [];
            cell.dishes.push(dish);
            // console.log('DONE MOVING DISH TO MYDISHES');

        }
    }

    $scope.moveDish = function(e, cell, index) {
        if (e.data) {
            cell.dishes.splice(index, 1);
        }
    }
    // creates grocerylist and pushes to firebase

    //creates groceryList Array on firebase
    $rootScope.groceryList = $rootScope.groceryList || {}

    //Adds Items to Grocery list --an item is an ingredient from myDishes

    // $scope.createGroceryList = function(newItems) {
    //     debugger;
    //     $rootScope.member.groceryList = $rootScope.member.groceryList || [];
    //     var items = [];
    //     $scope.grid.forEach(function(row) {
    //         row.cells.forEach(function(cell) {
    //             if (cell.dishes) {
    //                 cell.dishes.forEach(function(dish) {
    //                     if (dish.ingredients) {
    //                         dish.ingredients.forEach(function(ing) {
    //                             items.push(ing);
    //                         })
    //                     }
    //                 })
    //             }
    //         })
    //     })

    //     $rootScope.member.weeks = $rootScope.member.weeks || {};
    //     debugger;
    //     var calendarLayout = {
    //         name: $scope.name,
    //         grid: $scope.grid
    //     }
    //     $rootScope.member.weeks[$scope.name] = calendarLayout;
    //     $rootScope.member.groceryList = items;
    //     $rootScope.member.$save();
    // }

    // creates grocerylist and pushes to firebase

    //creates groceryList Array on firebase
    $rootScope.groceryList = $rootScope.groceryList || {}

    //Adds Items to Grocery list --an item is an ingredient from myDishes

    $scope.createGroceryList = function(newItems) {
        $rootScope.member.groceryList = $rootScope.member.groceryList || [];
        var items = [];
        $scope.grid.forEach(function(row) {
            row.cells.forEach(function(cell) {
                if (cell.dishes) {
                    cell.dishes.forEach(function(dish) {
                        if (dish.ingredients) {
                            dish.ingredients.forEach(function(ing) {
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
        $state.go('grocery');
    }

    // BEGIN NAVBAR SCRIPT
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Main Dishes',
            content: 'Dynamic Group Body - 1'
                    //  dish in myDishes track by dish.$id | filter : dish.type === 'Main Dish'
        },
        {
            title: 'Side Dishes',
            content: 'Dynamic Group Body - 2'
        },
        {
            title: 'Salads',
            content: 'Dynamic Group Body - 3'
        },
        {
            title: 'Appetizers',
            content: 'Dynamic Group Body - 4'
        },
        {
            title: 'Desserts',
            content: 'Dynamic Group Body - 5'
        }
    ];
    
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
    
    
// Not currently using this array
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };





    // END NAVBER SCRIPT
})




