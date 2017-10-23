var count = 100;
// 함수를 만들고
// 0 부터 시작해서 count 개의 피보나치 수열을

var num = 0;
var num2 = 1;

function run(){
  for( var i = 0; i< count; i++){
    if( i === 0){
      console.log(num);
    }else if(i === 1){
      console.log(num2);
    }else{
      var sum = num + num2;
      console.log(num+num2);
      num = num2;
      num2 = sum;
    }
  }
}
