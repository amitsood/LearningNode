
//Middle ware is basically any functionality that is between when the user sends the 
//request and when your route function receives it.
//bodyParser is an example of middleware

// Ordering of the middle ware is really important because its going to execute them
// in their declared order only
var express=require('express'),
	http=require('http');


var app = express();

//global configuration used for dev and prod
app.configure(function(){
	
	//Middleware
	app.use(express.bodyParser());
	app.use(express.methodOverride());// documentation @ senchalabs
	app.use(app.router);// This makes sure our routes are called before serving files
	//from static folder below
	app.use(express.static(__dirname + "/public")); // This is to server images, css file
});

//public/File.zip // what if i want a count of how many times its downloaded?


http.createServer(app).listen(app.get('port'), function(){
	console.log('listening to port ' + app.get('port'))l
});
