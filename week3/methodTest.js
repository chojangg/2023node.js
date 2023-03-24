const http = require('http');   // 모듈을 불러온다
const url = require('url')

const server = http.createServer();

server.on('request', (req, res)=>{
    console.log("method : ", req.method);
    console.log("url1", req, url);    
    console.log("url1", req, url);
    console.log("url1", req, );


    if(req.method == "GET"){
        console.log("GET 요청입니다.");
    }else if(req.method == "POST"){
        console.log("POST 요청입니다.");
    }
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<!DOCTYPE html><html lange="en"<head><meta charset="UTF-8</head><body>');
    res.write(`<h1>요청타입은 ${req.method} 입니다.</h1>`);
    res.end('</body></html>')
})

server.listen(3000, ()=>{
    console.log("server listening");
});