function solution(my_string) {
  const str = my_string.split(" ");
  let answer = str[0] * 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+") {
      answer += str[i + 1] * 1;
    } else if (str[i] === "-") {
      answer -= str[i + 1] * 1;
    }
    continue;
  }
  return answer;
}

//문자열에 *1 연산을 하면 숫자를 반환받는 것을 이용

/*
[다른 풀이 공부]

- eval() 함수를 대체하기 위한 new Function() 활용법

function solution(my_string) {
  return new Function(`return ${my_string}`)();
}

*/
