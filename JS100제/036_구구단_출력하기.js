/*
문제 : 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

입출력 예시)
입력 : 2
출력 : 2 4 6 8 10 12 14 16 18
*/

const solution = () => {
  const n = prompt("구구단 몇 단을 출력할까요?");
  let result = "";
  for (i = 1; i < 10; i++) {
    result += n * i + " ";
  }
  console.log(result);
};
