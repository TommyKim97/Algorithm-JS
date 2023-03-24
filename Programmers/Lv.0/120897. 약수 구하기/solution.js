const solution = (n) => {
  let result = [];

  for (let i = 1; i <= n; i++) {
    n % i === 0 ? result.push(i) : null;
  }
  return result.sort((a, b) => a - b);
};

/*
* 다른 사람의 풀이

function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}

=> n개 길이의 배열 생성, 모든 값을 0으로 채운 뒤, map으로 값과 인덱스를 받아와서 각 위치의 0에 인덱스+1를 해주고, filter로 나눴을 때 떨어지는 값을 솎아낸다.
*/
