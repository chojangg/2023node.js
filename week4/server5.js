const http = require('http');
const fs = require('fs').promises;

const path = require('path');
const url = require('url');
const server = http.createServer(async (req, res)=> {
    try{
        console.log("URL 부분 : ",req.url);
        
        if(req.url == '/favicon.ico'){
            res.writeHead(404);
            res.end();
        }

        // 지정된 폴더의 파일 리스트를 읽어와서 본문안에 넣기
        const menuFolder = path.join(__dirname,'./textFile');
        console.log("내가 읽고 싶은 폴더 : ",menuFolder);
        const fileList = fs.readdir(menuFolder);   // readdir을 활용하여 해당 폴더으 ㅣ내용을 가져온다
        
        // 요소만들기
        let fileListText = '<ul>';
        fileList.then((file_list) => {
            let li = 0;
            console.log("file_list",file_list);
            // while(li < file_list.length){
            //     let dateData = file_list[li].replace("menu_", "").replace(".txt","");
            //     fileListText += `<li><a href="/?date=${dateData}>`

            //     li+=1;
            // }
        });

        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        res.end("성공");

    }catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
        res.end(err.message);
    }
});

server.listen(8089);
server.on('listening',()=>{
    console.log("8089번 포트에서 서버 대기중입니다");
});