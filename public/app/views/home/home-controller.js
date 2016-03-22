app.controller('HomeController', function($rootScope, $state, $scope, DishService, CONSTANTS, $firebaseArray) {
    // 
    $scope.parent = {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch'
    };
    mobilecheck = function() {
        debugger;
        check = false;
        (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        // check = $scope.check;
        return $scope.check = check;
    }
    mobilecheck();
    $scope.children_width = 12; // %

    $scope.children = [];

    var addChild = function(order, flexGrow, flexShrink, flexBasis, alignSelf) {
        $scope.children.push({
            order: order || 0,
            flexGrow: flexGrow || 0,
            flexShrink: flexShrink || 1,
            flexBasis: flexBasis || 'auto',
            alignSelf: alignSelf || 'auto'
        });
    };
    var removeChild = function(index) {
        $scope.children.splice(index, 1);
    };

    $scope.addChild = addChild;
    $scope.removeChild = removeChild;

    for (var i = 0; i < 5; i++) {
        addChild();
    }


    //  end of flex
    var activities = [
        "Day",
        "Menu",
        // "Main Dish",
        // "Side Dish",
        // "Salad",
        // "Dessert",
    ];

  var activities2 = [
        "Days",
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

    var days2 = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thurs",
        "Fri",
        "Sat"
    ];

  

    $scope.dishcard = "#CF000F";
    $scope.myDishes = DishService.getMyDishes()
    $scope.grid = [];

    function gridcall() {
        if ($scope.check === true) {
        buildGrid2();
    } else {
        buildGrid();
    }
    }

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

    function buildGrid2() {
        for (var col = 0; col < activities2.length; col++) {
            $scope.grid[col] = $scope.grid[col] || { id: col, cells: [] };
            for (var row = 0; row < days2.length; row++) {
                var obj = { col: col, row: row, id: col + '' + row };
                if (row === 0) {
                    obj.header = $scope.dishcard;
                    obj.name = activities2[col];
                    obj.hideLg = true;
                }
                if (col !== 0 && row !== 0) {
                    obj.name = activities2[col] + " : " + days2[row];
                    obj.hideLgguts = true;
                }
                if (col === 0) {
                    obj.name = days2[row];
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
            title: 'Main Dish',
            content: ''
            //  dish in myDishes track by dish.$id | filter : dish.type === 'Main Dish'
        },
        {
            title: 'Side Dish',
            content: ''
        },
        {
            title: 'Salad',
            content: 'Dynamic Group Body - 3'
        },
        {
            title: 'Appetizer',
            content: 'Dynamic Group Body - 4'
        },
        {
            title: 'Dessert',
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
gridcall();
})



