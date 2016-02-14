var express = require('express');
var app = express();
var mw = require('./middleware');
var middleware = mw();
var port = process.env.PORT || 3000
	
app.use(middleware.logger)

app.get('/about',middleware.requireAuthentication,function(req,res){

	res.send("this is about me guys")
})

app.use(express.static(__dirname+'/public'))
app.listen(port,function (){

console.log(" Server Started")
})