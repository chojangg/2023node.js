// npm init
// node install express

// 모듈 가져오기
const express = require('express');

// 서버 생성하기
const app = express();

app.use(function(request, response) {
    let name = request.query.name;
    let area = request.query.area;

    response.send(`<h1>${name} : ${area}</h1>`);

    // http://localhost:8889/?name=jayun&area=mirim
    // >name=abc&area=bbc
});

app.listen(8889,()=>{
    console.log("port 8889로 실행합니다");
});