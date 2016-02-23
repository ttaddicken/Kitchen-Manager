app.constant('CONSTANTS', (function(){ 
	var root = 'https://kitchen-manager.firebaseio.com/';
	var recipes = root + 'recipes/'
	// var tags = root + 'tags/' 
	
	return {
		fbRef: root,
		recipes: recipes,
		// tags: tags
	}
}()));