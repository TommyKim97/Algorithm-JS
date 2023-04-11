//readline 모듈 불러오기
const readline = require("readline");
//input, output interface 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

//각 라인마다 실행 후 종료를 반복
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = Number(input[0]);
  let logStr = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      logStr += "*";
    }
    logStr += "\n";
  }
  console.log(logStr);
});

/*
개념 정리

* The node:readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time. (Node.js 문서)

-> readline 모듈은 Readable stream에서 데이터를 한 번에 한 줄씩 읽기 위한 인터페이스를 제공

-> readline 모듈을 불러온 후 input, output을 통해서 콘솔에 입력값을 받는 줄과 결과값을 내놓는 줄을 작성할 수 있다.

1. 모듈 불러오기
const readline = require("readline")
* require() 함수를 통해 readline 모듈을 불러옴
* CommonJS 문법

2. interface 객체 만들기
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
* interface 객체를 이용해 콘솔에서 표준 입출력 처리를 할 수 있음
* stdin : standard input
* stdout : standard output

3. 입출력 코드 작성하기
rl.on("line", (line) => {
    //입력 받은 값을 처리하는 코드
    rl.close();
});
rl.on("close", () => {
    //입력이 끝나고 실행하는 코드
    process.exit();
});

* on() : 이벤트와 콜백함수를 전달
* "line" : 입력 받은 값을 한 줄씩 읽어 문자열 타입으로 전달하는 역할을 하는 이벤트
* rl.close() : 인터페이스를 종료. 무한히 입력 받는 것을 방지.
* close : rl.close() 후에 이벤트로 close를 작성해 입력이 끝난 후 실행되어야 할 함수를 작성
*/
