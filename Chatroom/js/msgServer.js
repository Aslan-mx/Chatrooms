var  http=require("http");
var msgList=[];
var server=http.createServer(function (req,res) {
    var data="";

   req.on("data",function (d) {
    data+=d;
   }) ;
   req.on("end",function () {
       var obj=JSON.parse(decodeURIComponent(data));
       if(obj.type===0){
           msgList.push(obj.user+":"+obj.msg);
       }
       var result={result:msgList,error:null};
       res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"});
       res.write(encodeURIComponent(JSON.stringify(result)));
       res.end();

   })
});
server.listen(3002,"192.168.0.104",function () {
    console.log("聊天服务开启，开始监测");
});
//小轩爱吃肉，哈哈哈