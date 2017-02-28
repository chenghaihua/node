/**
 * Created by Administrator on 2017/2/28.
 */
var http=require("http");

function onRequest(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write('hello');
    res.end();
}

http.createServer(onRequest).listen(8888);