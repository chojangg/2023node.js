// npm init
// node install express

// 모듈 가져오기
const express = require('express');

// 서버 생성하기
const app = express();

app.use(function(request, response) {
    // json데이터로 내보내기
    let outputData = [];
    for(let i=0; i<3; i++) {
        outputData.push({
            count:i,
            name:`name-${i}`
        });
    }
    response.status(200).send(outputData);
    // send() : 매개변수에 따라서 적절하게 응답됨
    // [문자열 :HTML, 배열:JSON, 객체:JSON]
});

app.listen(8889,()=>{
    console.log("port 8889로 실행합니다");
});