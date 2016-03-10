app.constant('CONSTANTS', (function(){ 
	var root = 'https://kitchen-manager.firebaseio.com/';
	var dishes = root + 'dishes/'

	
	return {
		fbRef: root,
		recipes: dishes,

	}
}()));

