var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	fs.readFile('index.html', 'utf-8', function(err, data) {
		if(err) {
			console.log("error: ", err);
		} else {
			response.end(data)
		}
	});
});
server.listen(3000, function() {
	console.log(`Server running at port: ${this.address().port}`);
})