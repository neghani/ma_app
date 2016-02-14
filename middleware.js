module.exports=function (){
	return {
			requireAuthentication:function (req,res,next){
				console.log("this is a private hit");
				next()
			},
			logger:function(req,res,next){
				console.log(req.method+" from "+req.originalUrl + " folder done at " + new Date().toString())
				next()
			}
	}
}