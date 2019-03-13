var express=require("express");
var app=express();
// 路由
app.all('*', function(req, res, next) {
	console.log(req.path)
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	console.log('connnect---->all')
	next()
	
});
// 使用express创建静态服务器
app.use(express.static("dist"));


// 路由的path方法，即直接填入文件路径

app.listen(8088,function afterListen(){
    console.log("express http://localhost:8088 --- web test");
});