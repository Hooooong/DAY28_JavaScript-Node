
/*
  url 출력
*/
// 1. 서버 모듈 (라이브러리)을 import
var http = require("http");

// 2. 서버 모듈을 사용해서 서버를 정의
// 인자 수가 정해져있음
var server  = http.createServer(function(req, response){

  // 사용자 요청에 대해 어떻게 응답할지를 정의
  response.write("url : " + req.url);

  var array = req.url.split("/");

  // 일반 for문
  // index 값을 리턴한다.
  // for(i in array){
  //   response.write("url : [" + array[i] + "]");
  // }

  // 향상된 For 문
  // item 자체를 리턴한다
  // response.wrtieHead(200, {'Content-Type':'text/html'})
  // array.forEach(function(item){
  //   response.write("["+item+"] <br>");
  // });

  // header 를 통해 html 로 인식하게 끔 한다.
  // <br> : html 에서 줄띄기
  // \n : text 에서 줄띄기

  response.end("");
});

// 3. 서버 실행
// 몇번 포트에서 대기를 할 것인지 정의
// 2번째 파라미터는 서버가 실행 중이면 실행하는 함수
server.listen(8080, function(){
  console.log("Server is Running.....");
});
