// node.js 파일 실행 방법
// 1. powerShell 실행
// 2. 경로 변경 -> cd 경로
// 3. npm 실행

// 변수의 선언
// var 변수명
var a = 11
var b = "hello"

console.log(a);


// 반복문
for(var i = 0 ; i<10; i++){
  console.log(i + "번째 실행");
}

// 조건문
if(a > 3){
  console.log("a 가 3 보다 큽니다.");
}else{
  console.log("a 가 3 보다 작습니다.");
}

var c = 2;

var result = sum1(a,c);
console.log(result);


// 함수 사용법
// 파라미터에 타입이 없다.
// 문장 내에서 return 이 있는지 여부에 따라 결정
function sum1(param1, param2){
  return param1 + param2;
}

// 함수 사용법 2
var sum2 = function(param1, param2){
  return param1 + param2;
}

console.log(sum2(a,c));

// 클래스 사용법
// 함수 사용하는것과 동일하지만
// 앞글자를 대문자로 한다.
function Num(param1, param2){
  var a = 0;          // private 선언
  this.b = 10;        // public 선언

  this.max = function(param1, param2){
    if(param1 > param2){
      console.log(param1 +"이 "+param2 +"보다 큽니다.");
    }
  }
}

var num = new Num(a,c);
console.log(num.b);
