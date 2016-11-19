var http = require("http");
var url = require("url");

var server = new http.Server(function(req,res){

	var urlParsed = url(req.url, true);
	// http://127.0.0.1/echo?message=Hello
	if(urlParsed.pathname == "/echo" && urlParsed.query.message){
		res.end(urlParsed.query.message);
		// send   Hello
	}

})

server.listen(8000, "127.0.0.1");