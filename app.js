var express = require('express');
var app = express();
var mw = require('./middleware');
var middleware = mw();

app.use(middleware.logger)

app.get('/about',middleware.requireAuthentication,function(req,res){

	res.send("this is about me guys")
})

app.use(express.static(__dirname+'/public'))
app.listen(3000,function (){

console.log(" Server Started")
})