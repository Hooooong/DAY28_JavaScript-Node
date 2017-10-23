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
  var num = 0;
  var num2 = 1;

  for( var i = 0; i< count; i++){
    if( i === 0){
      result = result + 0 + "</br>";
    }else if(i === 1){
      result =  result + 1 + "</br>";
    }else{
      var sum = num + num2;
      result = sum + "</br>";
      num = num2;
      num2 = sum;
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
