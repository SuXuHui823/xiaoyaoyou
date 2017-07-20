//引入http模块
var http = require("http");
//引入fs模块
var fs = require("fs");
//创建服务器
http.createServer(function(req,res){
    //设置跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    fs.readFile("data"+req.url,"utf8",function(err,data){
            if(!err){
                res.end(data)
            }
    })
}).listen(8023);
console.log("启动成功");