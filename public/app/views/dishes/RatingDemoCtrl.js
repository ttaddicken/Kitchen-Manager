//CREATE A STAR RATING CAPABILITY TO CREATE A DISH **Also needed for Manage Dishes
app.controller('RatingDemoCtrl', function ($scope, $rootScope, CONSTANTS, $firebaseArray) {
    $scope.rate = 5;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
        { stateOn: 'fa fa-spoon fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-spoon fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-spoon fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-spoon fa-2x', stateOff: 'fa fa-lemon-o fa-2x' },
        { stateOn: 'fa fa-spoon fa-2x', stateOff: 'fa fa-lemon-o fa-2x' }
    ];
})