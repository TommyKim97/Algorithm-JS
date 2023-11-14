function solution(box, n) {
  let arr = [];
  box.forEach((x) => {
    arr.push(Math.floor(x / n));
  });
  let ans = 1;
  arr.forEach((y) => {
    ans *= y;
  });
  return ans;
}

/*
다른 사람의 풀이

구조분해 할당을 사용하면 간단했다 

function solution(box, n) {
  let [width, length, height] = box;

  return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

}

*/
