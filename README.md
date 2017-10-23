Android Programing
----------------------------------------------------
### 2017.10.23 23일차

#### 예제
____________________________________________________

#### 공부정리
____________________________________________________

##### __JavaScript__

- JavaScript 란?

  > JavaScript 는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 사이드 네트워크 프로그래밍에도 사용되고 있다.

- JavaScript 기본 문법

  - 변수, 배열 설정

  ```JavaScript
  // JavaScript 와 java 의 다른점은
  // 변수의 타입이 정해져있지 않고 var 로 통일이 된다.
  // 즉, 자동 형변환을 해준다!!!
  var num = 6;
  var str = "안녕";

  // 배열 설정
  // { } 이 아닌 [ ] 으로 설정한다.
  var member = ['egoing', 'k8805', 'sorialgi']
  ```

  - 반복문, 조건문

  ```JavaScript
  // 반복문 : for
  // java 와 다른점은 변수명만 다르다.
  for(var i = 0 ; i<10; i++){
    console.log(i +" 번째 실행");
  }

  // 배열에 대한 반복문
  // 전체 배열을 돌면서 index 를 반환한다.
  for(i in array){
    // 생략
  }

  // 배열에 대한 반복문
  // index 가 아닌 item 자체를 반환한다.
  array.forEach(function(item){
    response.write("["+item+"] <br>");
  });

  // 반복문 : while
  // java 와 동일
  while(true){
    var i = 0;
    console.log(i +" 번째 실행");
    i++;

    if(i > 10){
      break;
    }
  }

  // 조건문
  // java와 동일
  var num = 3;
  if(num > 2){
    console.log(num + "은 2보다 큽니다.");
  }else{
    console.log(num + "은 2보다 작습니다.");
  }
  ```

  - 함수 설정

  ```JavaScript
  // 함수 사용법
  // parameter 타입이 없다.
  // 문장 내에서 return 이 있는지 여부에 따라 결정
  function sum1(param1, param2){
    return param1 + param2;
  }

  // 함수 사용법 2
  var sum2 = function(param1, param2){
    return param1 + param2;
  }

  var result = sum1(a,c);
  console.log(result);
  console.log(sum2(a,c));
  ```

  - 클래스 생성

  ```JavaScript
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
  ```

- 참조 : [JavaScript](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8), [JavaScript 생활코딩](https://opentutorials.org/course/743)

##### __Node.js__

- Node.js 란?

  > Node.js는 확장성 있는 네트워크 애플리케이션(특히 서버 사이드) 개발에 사용되는 소프트웨어 플랫폼이다. 작성 언어로 자바스크립트를 활용하며 Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가지고 있다.<br>내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도의 소프트웨어 없이 동작하는 것이 가능하며 이를 통해 웹 서버의 동작에 있어 더 많은 통제를 가능케 한다.

- 서버 생성

  ```JavaScript
  // 1. 서버 모듈 (라이브러리)을 import
  var http = require("http");

  // 2. 서버 모듈을 사용해서 서버를 정의
  // 인자 수가 정해져있음
  var server  = http.createServer(function(request, response){

    // 사용자 요청에 대해 어떻게 응답할지를 정의
    response.write("Hello server!!!");
    response.end("");
  });

  // 3. 서버 실행
  // 몇번 포트에서 대기를 할 것인지 정의
  // 2번째 파라미터는 서버가 실행 중이면 실행하는 함수
  server.listen(8080, function(){
    console.log("Server is Running.....");
  });
  ```

- URL 분석

  ```JavaScript
  // 1. 서버 모듈 (라이브러리)을 import
  var http = require("http");

  // 2. 서버 모듈을 사용해서 서버를 정의
  // 인자 수가 정해져있음
  var server  = http.createServer(function(req, res){

    // 사용자 요청에 대해 어떻게 응답할지를 정의
    // request.url 로 입력된 url 을 분석할 수 있다.

    // http://ip주소:portNum/~~~
    // req.url : /~~~
    res.write("url : " + req.url);

    var array = req.url.split("/");
    res.wrtieHead(200, {'Content-Type':'text/html'})
    array.forEach(function(item){
      res.write("["+item+"] <br>");
    });

    // header 를 통해 html 로 인식하게 끔 한다.
    // <br> : html 에서 줄띄기
    // \n : text 에서 줄띄기
    res.end("");
  });

  // 3. 서버 실행
  // 몇번 포트에서 대기를 할 것인지 정의
  // 2번째 파라미터는 서버가 실행 중이면 실행하는 함수
  server.listen(8080, function(){
    console.log("Server is Running.....");
  });
  ```

- RESTful 방식으로 URL 분석

  ```JavaScript
  // RestAPi
  // -------------------------------
  // /서비스명/값
  // ------------------------------
  // /피보나치/100 == 숫자배열
  // /아나그램/acdagc == true/ false
  var http = require("http");

  var server = http.createServer(function(req, res){

    // 1. 요청이 온 주소체계가 내가 제공하는 api 구조와 일치하는지 확인
    // decodeURIComponent(주소) - > %20 등의 주소 문자를 원래 문자로 변환
    // encodeURIComponent(문자) - > 주소로 사용할 수 있는 문자열로 변환
    var cmds = decodeURI(req.url).split("/");
    res.writeHead(200, {'Content-Type':'text/html'});

    if(cmds.length < 3){
      // 주소 체계가 잘못되었다면 알려준다.
      res.end("<h> Your request is Wrong!!!!!</h>");
    }else{
      // 정상이면
      // if 문으로 확장한다.
      if(cmds[1] == "fibo"){
        if(!isNaN(cmds[2])){
          var text = getFibo(cmds[2]);
          res.end(text);
        }else{
          res.end("<h>Value is Wrong!!</h>");
        }
      }else if(cmds[1] == "anagram"){
        res.end( getAnagram(cmds[2],cmds[3]) + "</br>" );
      }else{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("<h> No Service!!!!!</h>");
      }
    }

  });

  server.listen(8080, function(){
    console.log("server is running......");
  });

  /*
  피보나치 변환 함수
  */
  function getFibo(count){
    var result = "";
    var fir = 0;
    var sec = 1;

    for( var i = 0; i< count; i++){
      if( i === 0){
        result = result + 0 + "</br>";
      }else if(i === 1){
        result =  result + 1 + "</br>";
      }else{
        var sum = fir + sec;
        result = sum + "</br>";
        fir = sec;
        sec = sum;
      }
    }
    return result;
  }

  /*
  아나그램 변환 함수
  */
  function getAnagram(text1, text2){

    text1 = text1.replace(" ", "");
    text2 = text2.replace(" ", "");
    text1 = text1.toUpperCase();
    text2 = text2.toUpperCase();

    var array1 = text1.split("");
    var array2 = text2.split("");

    if(array1.length == array2.length){
      array1.sort();
      array2.sort();

      for(var i=0; i<array1.length; i++){
        if(array1[i] != array2[i]){
          return false;
        }
      }

    }else{
      return false;
    }

    return true;
  }
  ```
- 참조 : [Node.js](https://ko.wikipedia.org/wiki/Node.js)
