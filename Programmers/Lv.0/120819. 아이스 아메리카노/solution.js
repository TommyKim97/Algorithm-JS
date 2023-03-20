function solution(money) {
  let answer = [Math.floor(money / 5500), money % 5500];
  return answer;
}
