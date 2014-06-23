var express = require('express'),
    http= require('http');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
});


app.get('/', function(req,res){
    res.send('hello express');
});


app.get('/hello', function(req,res){
    var message=[
    "<h1>Hello Express</h1>",
    "<p>Welcome to building web apps in Node.js with Express</p>",
    "<ui><li>Red</li><li>Green</li><li>Blue</li><li>Black</li></ui>"
    ].join('\n');
    res.send(message);
});

//app.get('/users/:userid', function(req,res){
 //   res.send("<h1>Hello User #" + req.params.userid + " !");
//});


app.post('/users', function(req,res){
    res.send("Created a new user with the name "+ req.body.userid + " !");
});

//Same as get and post we can also do put and delete like this
//app.put  /users/:userid-- and in the body we can have the details of the user
//app.delete ?users/:userid

//however i am going to leave that to you guys to experiment with and i will show you 
//how to work with more complex routes so that you can use a regular expression 
//to use the routes

app.get(/\/users\/(\d*)\/?(edit)?/, function(req, res){
    //users/10
    //users/10/
    //users/10/edit

    var message="user #" + req.params[0];
    if(req.params[1]=== "edit")
    {
        message= "Editing " + message;
    }else
    {
        message= "Viewing "+ message;
    }
    res.send(message);

});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
