/**
 * Created by Administrator on 2017/3/20.
 */
var http=require("http");
var fs=require("fs");
var cheerio=require("cheerio");
var request=require("request");
var iconv=require("iconv-lite");

/*爬取网页内容*/
var i=0;
var url="http://www.vodtw.com/html/book/30/30832/16995754.html";

function fetchPage(x){
    startRequest(x);
}

function startRequest(x){
    http.get(x,function(res){
        var html="";
        var titles=[];


        res.on('data',function(chunk){
            titles.push(chunk);
        });

        res.on("end",function(){
            var decodedBody = iconv.decode(Buffer.concat(titles), 'gbk');
            var $=cheerio.load(decodedBody);
            //var s=$("#txtContent").text();

            var s=$("#BookText").text();

            console.log(s);
            console.log("success");
          /*  fs.writeFile("read.html",s,(err)=>{
                if(err){
                    console.error(err);
                }else{

                }
            });*/

        });
    });
}

startRequest(url);