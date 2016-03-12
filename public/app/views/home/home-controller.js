app.controller('HomeController', function($scope, $state, DishService) {

    var activities = [
        "Day",
        "Activities",
        "Main Dish",
        "Side Dish",
        "Salad",
        "Dessert",
    ];

    var days = [
        "Day",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];


    $scope.myDishes = DishService.getMyDishes()

    //  $scope.Calendar = [];
    // $state.go('defaults')
    $scope.grid = [];

    buildGrid();
    function buildGrid() {
        for (var row = 0; row < days.length; row++) {
            $scope.grid[row] = [];
            for (var col = 0; col < activities.length; col++) {
                var column = col
                var obj = { row: row, col: column };
                if (col === 0) {
                    obj.name = days[row];
                    obj.hideLg = true;                    
                }
                if (row === 0) {
                    obj.name = activities[col];
                    obj.hideSm = true;
                }
                $scope.grid[row].push(obj);
            }
        }
        console.log($scope.grid);
        return $scope.grid
    }

    // calendarWeeks

    // drag and drop functionality
    $scope.dragStart = function(event) {
        console.log("WOrking")
    }

    $scope.onDragComplete = function(dish, event, cell) {
        if(!cell.row || !cell.col){
            return;
        }
        
        console.log('Successfully moved dish to a dropable area');
        cell.dishes = cell.dishes || [];
        cell.dishes.push(dish);
        console.log('DONE MOVING DISH TO MYDISHES');

    }
    
    $scope.moveDish = function(cell, index){
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


    //logic for favorites

    // $scope.showFavorites = function (){
    //     for (var i=0; i < myDishes.length; i++){
    //         if(myDishes.length <= 15 ){
    //             return true;
    //         } else{
    //             return findTopFavorites();
    //         }
    //     }
    // }

    // $scope.findTopFavorites = function (){
    //     myDishes.sort(function(a, b) {
    //         var sortedByStarsArr = parseFloat(a.stars) - parseFloat(b.stars);
    //     })
    //     for(var i = 0; i < sortedByStarsArr.length; i++){
    //         var currentItem = sortedByStarsArr[i];
    //         if(current)
    //     }

    // }


})
// calendarWeeks