console.log("node.js 실행하기");
파일명 = 'ex01'
console.log('cmd에서 node '+파일명+'을 입력해봐요~!');
console.log(`cmd에서 node ${파일명}을 입력해봐요~!`);

console.log("---------------------------------------");

// 일반형
// - (매개변수) => {함수코드}
func_arrow1 = (str) => {
  return "출력1 : "+str
};

//매개변수가 하나일때는 () 생략가능
// - 매개변수 => {함수코드}
func_arrow2 = str => {
  return "출력2 : "+str
}
// 함수코드가 return문 하나일경우 괄호 및 return 생략 가능
// - 매개변수 => 반환값
func_arrow3 = str => "출력3 : "+str
console.log(func_arrow1('fa1'));
console.log(func_arrow2('fa2'));
console.log(func_arrow3('fa3'));
/* arrow function과 function 의 차이점은 
this에서 차이가 있으므로, 그대로 대체할 수는 없다 */

console.log("---------------------------------------");

function scopeTest(someVal) {
  // 정의 되지 않은 변수 typeof
  console.log("1 : ", typeof test_none);
  // 함수범위 테스트 (곧 블럭안에서 정의 될 변수)
  console.log("2-1 : ", typeof test_in_var);
  console.log("2-2 : ", typeof test_in_let);

  if(someVal) {
      // 블럭단위 함수
      console.log("3-1 : ", typeof test_in_var);
      // var의 경우에는 호이스팅 될 때 undefined로 초기화
      // console.log("3-2 : ", typeof test_in_let);
      // let의 경우에는 일시적 사각지대(TDZ : Temporal Dead Zone)에 놓여진다

      var test_in_var;
      let test_in_let;
      console.log("3-3 : ", typeof test_in_let); // undefined
  }
}
scopeTest(true);

console.log("---------------------------------------");

const cathy = {
  "name" : "cathy",
  "age" : 19,
  "skills" : ["자바스크립트", "파이썬", "코볼"]
};

// { name: 'cathy', age: 19, skills: [ '자바스크립트', '파이썬', '코볼' ] }
console.log(cathy)
// cathy
console.log(cathy.name);
console.log(cathy["name"]);

cathy.city = "Seoul";
// { name: 'cathy', age: 19, skills: [ '자바스크립트', '파이썬', '코볼' ], city: 'Seoul'}
console.log(cathy);

delete cathy.city;
// { name: 'cathy', age: 19, skills: [ '자바스크립트', '파이썬', '코볼' ] }
console.log(cathy);

console.log("---------------------------------------");

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
console.log(obj.result);

console.log(JSON.stringify({x:5, y:6}));