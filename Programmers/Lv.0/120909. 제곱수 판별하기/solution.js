const solution = (n) => (n % Math.sqrt(n) === 0 ? 1 : 2);

/*
다른 풀이 공부

(1)

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

Number.isInteger() -> 정수인지 확인해서 푸는 방법


(2)

function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

%1로 나눴을 때 0으로 떨어지는지 확인하는 걸로도 정수인지 확인할 수 있음
*/
