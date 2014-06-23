var  express= require('express'),
	http=require('http');

var app= express();
app.configure(function(){
	app.set('port', 3000);
	app.use(express.bodyParser());
});


//So far we have used send and render only lets explore more
app.get('/', function(req,res){

	//sending http status code
	res.send(404, "Not found");

	//sending Json back
//	res.json(200,{'name':'Amit'});// this will set the content type to json automatically

	//tell the browser that we are sending an image back
//	res.type('image/png').send('this is a picture');

	//Replying with differnt content depending upon what is requested
//	res.format({
//		html: function(){res.send("<h1>Hello, Express!</h1>")},
//		json:function(){res.send({"Hello":"Express"})},
//		text: function(){res.send("hello, Express!")}
//	 });

	//redirect example
//	res.redirect('/home'); // passes 302 status by default
//	res.status(302).redirect('/home'); // same as above

	
});
app.get('/home', function(req,res){
	res.send('you got redirected here');
});



http.createServer(app).listen(app.get('port'), function(){
console.log('Listening to port '+ app.get('port'));

});