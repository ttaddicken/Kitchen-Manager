'use strict';
app.controller('ProfileController', function($rootScope, $scope, DishService, CONSTANTS, $firebaseArray) {

    DishService.getMyDishes().$loaded(function(dishes) {
        $scope.myDishes = dishes;
        buildZeros();
        buildTypes(); 
        starCounter();
        typeCounter();
        buildStarGraph();
        buildTypeGraph();
    });

    // $scope.ratingStates = DishService.ratingStates;

    $scope.zeroStars = [];

    function buildZeros() {
        for (var i = 0; i < $scope.myDishes.length; i++) {
            if (!$scope.myDishes[i].stars) {
                $scope.zeroStars.push($scope.myDishes[i])
            }
        } 
    }

    $scope.starRatings = {};

    var starCounter = function() {
        //AngularFire brute force $firebaseArray != [] its a tricky trick 
        //$scope.myDishes === {} != []; 
        for (var i = 0; i <= $scope.myDishes.length - 1; i++) {
            try {
                var currDish = $scope.myDishes[i];
                var starCount = currDish.stars || 'unrated';
                $scope.starRatings[starCount] = $scope.starRatings[starCount] || {};
                $scope.starRatings[starCount].dishes = $scope.starRatings[starCount].dishes || [];
                $scope.starRatings[starCount].dishes.push(currDish);
            } catch (error) {
            }
        }
    };

    $scope.noTypes = [];

    function buildTypes() {
        for (var i = 0; i < $scope.myDishes.length; i++) {
            if (!$scope.myDishes[i].type) {
                $scope.noTypes.push($scope.myDishes[i])
            }
        } 
    }

    $scope.dishesByType = {};

    var typeCounter = function() {
        //AngularFire brute force $firebaseArray != [] its a tricky trick 
        //$scope.myDishes === {} != []; 
        for (var i = 0; i <= $scope.myDishes.length - 1; i++) {
            try {
                var currDish = $scope.myDishes[i];
                var dishTypeCount = currDish.type || 'uncategorized';
                $scope.dishesByType[dishTypeCount] = $scope.dishesByType[dishTypeCount] || {};
                $scope.dishesByType[dishTypeCount].dishes = $scope.dishesByType[dishTypeCount].dishes || [];
                $scope.dishesByType[dishTypeCount].dishes.push(currDish);
            } catch (error) {
            }
        }
    };

    //  CHART RECIPES BY STAR RATING: 
    function buildStarGraph() {

        $scope.starOptions = {
            chart: {
                type: 'pieChart',
                height: 350,
                donut: true,
                x: function(d) { return d.key; },
                y: function(d) { return d.y; },
                showLabels: true,

                pie: {
                    startAngle: function(d) { return d.startAngle / 2 - Math.PI / 2 },
                    endAngle: function(d) { return d.endAngle / 2 - Math.PI / 2 }
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
                y: $scope.starRatings[1] ? $scope.starRatings[1].dishes.length : 0
            },
            {
                key: "Two Stars",
                y: $scope.starRatings[2] ? $scope.starRatings[2].dishes.length : 0
            },
            {
                key: "Three Stars",
                y: $scope.starRatings[3] ? $scope.starRatings[3].dishes.length : 0
            },
            {
                key: "Four Stars",
                y: $scope.starRatings[4] ? $scope.starRatings[4].dishes.length : 0
            },
            {
                key: "Five Stars",
                y: $scope.starRatings[5] ? $scope.starRatings[5].dishes.length : 0
            },
            {
                key: "Unrated Dishes",
                y: $scope.starRatings['unrated'] ? $scope.starRatings['unrated'].dishes.length : 0
            }
        ];

    }






    //  CHART RECIPES BY DISH TYPE:
        function buildTypeGraph() {
    
    $scope.dishTypeOptions = {
        chart: {
            type: 'pieChart',
            height: 350,
            donut: true,
            x: function(d) { return d.key; },
            y: function(d) { return d.y; },
            showLabels: true,

            pie: {
                startAngle: function(d) { return d.startAngle / 2 - Math.PI / 2 },
                endAngle: function(d) { return d.endAngle / 2 - Math.PI / 2 }
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
            key: "Appetizer",
            y: $scope.dishesByType['Appetizer'] ? $scope.dishesByType['Appetizer'].dishes.length : 0
        },
        {
            key: "Salads",
            y: $scope.dishesByType['Salad'] ? $scope.dishesByType['Salad'].dishes.length : 0
        },
        {
            key: "Side Dish",
            y: $scope.dishesByType['Side'] ? $scope.dishesByType['Side'].dishes.length : 0
        },
        {
            key: "Main Entre",
            y: $scope.dishesByType['Main Dish'] ? $scope.dishesByType['Main Dish'].dishes.length : 0
        },
        {
            key: "Desserts",
            y: $scope.dishesByType['dessert'] ? $scope.dishesByType['dessert'].dishes.length : 0
        },
        {
            key: "Not Categorized",
            y: $scope.dishesByType['uncategorized'] ? $scope.dishesByType['uncategorized'].dishes.length : 0
        },
        
    ];
} 
})