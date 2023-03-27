//나의 풀이

const solution = (my_string) => {
  let answer = "";
  for (let a of my_string) {
    a === a.toUpperCase()
      ? (answer += a.toLowerCase())
      : (answer += a.toUpperCase());
  }
  return answer;
};

/* 
다른 사람의 풀이 공부


const solution = (my_string) =>
  [...my_string]
    .map((a) =>
      a.charCodeAt() >= 65 && a.charCodeAt() < 97
        ? a.toLowerCase()
        : a.toUpperCase()
    )
    .join("");


[아스키코드 활용 방법]
문자열 코드로 대문자는 65, 소문자는 97부터 시작한다.
*/
