// get the http module
var http = require("http");
// fs module allows us to read a d write content for responses!!
var fs = require("fs");
// creating a server using http module:
var server = http.createServer(function(request, response){
	// see what URL the clients are requesting:
	console.log("client request URL: ", request.url);
	// begin routing:
	if (request.url ==="/") {
		fs.readFile("index.html", "utf8", function(errors, contents){
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(contents);
			response.end()
		});
	}
	else if (request.url === '/ninjas') {
		fs.readFile("ninjas.html", "utf8", function(errors, contents){
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(contents);
			response.end()
		});
	}
	else if (request.url === '/dojos/new') {
		fs.readFile("dojo.html", "utf8", function(errors, contents){
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(contents);
			response.end()
		});
	}
	else{
		response.end("file not found");
	}
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("running in port 6789");