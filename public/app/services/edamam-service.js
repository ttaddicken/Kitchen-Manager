app.service("EdamamService", function($http) {
	var url = "http://bcw-getter.herokuapp.com/?url=";

	var base = 'https://api.edamam.com/search?q=';
	var keys = '&app_id=84c378c2&app_key=bf220a4a4f47bf15ebd97ab58b5ac883';

	this.search = function(q) {
		var apiUrl = url + encodeURIComponent(base + q + keys);
		return $http.get(apiUrl);
	}

});