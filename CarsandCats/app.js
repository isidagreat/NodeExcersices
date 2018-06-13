// get the http module
var http = require("http");
// fs module allows us to read a d write content for responses!!
var fs = require("fs");
// creating a server using http module:
var server = http.createServer(function(request, response){
	// see what URL the clients are requesting:
	console.log("client request URL: ", request.url);
	// begin routing:
	if (request.url ==="/cars") {
		fs.readFile("./views/cars.html", "utf8", function(errors, contents){
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(contents);
			response.end()
		});
	}
	else if (request.url === '/images/1.jpg') {
		fs.readFile("./images/1.jpg", function(errors, contents){
			response.writeHead(200,{'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end()
		});
	}	
	else if (request.url === '/images/2.jpg') {
		fs.readFile("./images/2.jpg", function(errors, contents){
			response.writeHead(200,{'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end()
		});	
	}		
	else if (request.url === '/cats') {
		fs.readFile("./views/cats.html", "utf8", function(errors, contents){
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(contents);
			response.end()
		});
	}
		else if (request.url === '/images/3.jpg') {
		fs.readFile("./images/3.jpg", function(errors, contents){
			response.writeHead(200,{'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end()
		});	
	}
		else if (request.url === '/images/4.jpg') {
		fs.readFile("./images/4.jpg", function(errors, contents){
			response.writeHead(200,{'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end()
		});	
	}
	else if (request.url === '/cars/new') {
		fs.readFile("./views/new.html", "utf8", function(errors, contents){
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
server.listen(7077);
// print to terminal window
console.log("running in port 7077");