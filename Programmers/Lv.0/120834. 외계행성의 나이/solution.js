const solution = (age) => {
  const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let res = age.toString().split("");
  let result = [];
  for (let el of res) {
    result.push(abc[el]);
  }
  return result.join("");
};

/*
다른 풀이 공부

(1)

function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}

-> map 함수를 이용

(2)

function solution(age) {
    let char = 'abcdefghij'
    return Array.from(age.toString()).map(t => char[+t]).join('');
}

-> 아스키코드를 사용
 */
