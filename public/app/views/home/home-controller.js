app.controller('HomeController', function($scope, $state, DishService){

$scope.myDishes = DishService.getMyDishes()

//  $scope.Calendar = [];
// $state.go('defaults')
//  function buildGrid() {
//             for (var i = 0; i < 6; i++) {
//                 var row = i
//                 $scope.grid[row] = [];
//                 for (var j = 0; j < 7; j++) {
//                     var column = j
//                     $scope.grid[row].push({ row: row, col: column })
//                 }
//             }
//             console.log($scope.grid);
//             return $scope.grid
//         }

// buildGrid();
// calendarWeeks
var column=[
    "Activities",
    "Day",
    "Main Dish",
    "Side Dish",
    "Salad",
    "Dessert",
];

$scope.calendar = [
 {
        "activities": {},
        "day" : "Mon",
        "main" : "blah",
        "sides" : "basdf",
        "salads" : "asdfsdf",
        "desserts" : "sadfasdfd"
    }
]

 $scope.makeCalendar = function (g) {
     debugger;
        $scope.grid = []
        if (g > 6) {
            g = 6;
            $scope.g = 6;
        }
        for (var i = 0; i < g; i++) {
            var colum = i
            $scope.grid[colum] = [];
            for (var j = 0; j < g; j++) {
                var row = j
                $scope.grid[colum].push({colum: colum, row: row })
            }
        }
        
            }
    

})
// calendarWeeks