angular
.module('home')
.controller('IndexController', function($scope, supersonic, backendService, $http) {
    // Controller functionality here
    $scope.position = undefined;

    $scope.getPosition = function() {
    	supersonic.device.geolocation.getPosition().then( function(position){
    		$scope.position = position;
    	});
    };

    $scope.activities = ['Eat', 'Study', 'Work Out'];

    $scope.test = function(){
        var i = backendService.test(); 
        supersonic.logger.log(i);

    }

    $scope.queue = function(activity) {
        
       backendService.enterQueue(activity);

    }

    drawerBtn = new supersonic.ui.NavigationBarButton({
    	onTap: function() {
    		supersonic.ui.drawers.open();
    	},
    	styleId: "nav-drawer"
    });

    supersonic.ui.navigationBar.update({
    	title: "Friendr",
    	overrideBackButton: false,
    	buttons: {
    		left: [drawerBtn]
    	}
    }).then(supersonic.ui.navigationBar.show());
});
