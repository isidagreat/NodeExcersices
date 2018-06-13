// get the http module:
var http = require("http");
// fs module allows us to read and write content for responses!!
var fs = require("fs");
// creating a server using the http module:
var server = http.createServer(function(request, response){
	// see what URL the clients are requesting:
	console.log("client request URL: ", request.url);
	// this is how we  do routing:
	if (request.url === "/"){
		fs.readFile("index.html", "utf8", function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
			response.write(contents); //send response body
			response.end()// finished

		});
	}
	// request didn't match anything
	else{
		response.writeHead(404);
		response.end("file not found!!!");
	}
});
// tell your server which port to run on
server.listen(6789)
// print to terminal window
console.log("running on localhost at port 6789")