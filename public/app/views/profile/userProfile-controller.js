'use strict';
app.controller('ProfileController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray){


    
$rootScope.myDishes = DishService.getMyDishes();

$scope.ratingStates = DishService.ratingStates

    $scope.zeroStars = 10;
    $scope.oneStar = 5;
    $scope.twoStars = 10;
    $scope.threeStars = 5;
    $scope.fourStars = 10;
    $scope.fiveStars = 5;
    
//     var starCounter = function() {
//     for(i = 0; i <= myDishes.length; i++);
//         if(myDishes[i].stars === 1){
//             oneStar++;
//         } 
//         if(myDishes[i].stars === 2){
//             twoStars++;
//         }
//         if(myDishes[i].stars === 3){
//             threeStars++;
//         } 
//         if(myDishes[i].stars === 4){
//             fourStars++;
//         }
//         if(myDishes[i].stars === 5){
//             fiveStars++;
//         }           
//         else{ zeroStars++ };
// };

// starCounter();
    
//  CHART RECIPES BY STAR RATING: 
 $scope.starOptions = {
            chart: {
                type: 'pieChart',
                height: 350,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 70,
                        bottom: -20,
                        left: 0
                    }
                }
            }
        };

        $scope.starData = [
            {
                key: "One Star",
                y: 5
            },
            {
                key: "Two Stars",
                y: 2
            },
            {
                key: "Three Stars",
                y: 9
            },
            {
                key: "Four Stars",
                y: 7
            },
            {
                key: "Five Stars",
                y: 4
            },
        ];


//  CHART RECIPES BY DISH TYPE:
 
 $scope.dishTypeOptions = {
            chart: {
                type: 'pieChart',
                height: 350,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 70,
                        bottom: -20,
                        left: 0
                    }
                }
            }
        };

        $scope.dishTypeData = [
            {
                key: "Main Entre",
                y: 5
            },
            {
                key: "Side Dish",
                y: 3
            },
            {
                key: "Salads",
                y: 7
            },
            
        ];

})