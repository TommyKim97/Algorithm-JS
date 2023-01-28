const solution = (balls, share) => {
  // 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
  return factorial(balls) / (factorial(balls - share) * factorial(share));
};

const factorial = (num) => {
  // 팩토리얼을 구하는 함수
  let returnFactorial = BigInt(1);
  for (let i = num; i >= 2; i--) {
    returnFactorial *= BigInt(i);
  }
  return returnFactorial;
};

// BigInt 형식을 사용해야 balls, share의 범위를 감당할 수 있음.

/*

다른 풀이 공부 (재귀 함수 활용)

const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)

function solution(balls, share) {
  return Math.round(factorial(balls) / factorial(balls - share) / factorial(share))
}

*/
