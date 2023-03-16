// callback 함수

function func_callback(){
  console.log("콜백함수 실행");
}
function func_one(callback) {
  console.log("함수 실행");
  callback();
}

func_one(func_callback);