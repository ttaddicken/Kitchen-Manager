app.constant('CONSTANTS', (function(){ 
	var root = 'https://kitchen-manager.firebaseio.com/';
	var dishes = root + 'dishes/'
	// var tags = root + 'tags/' 
	
	return {
		fbRef: root,
		recipes: dishes,
		// tags: tags
	}
}()));



// app.constant('FBREF', 'https://kitchen-manager.firebaseio.com/');