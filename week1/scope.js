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