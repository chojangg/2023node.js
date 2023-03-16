// JSON 문자열 형식을 객체로 바꾸기
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
console.log(obj.result);

// 값 혹은 객체를 JSON형태의 문자열로 변경
console.log(JSON.stringify({x:5, y:6}));