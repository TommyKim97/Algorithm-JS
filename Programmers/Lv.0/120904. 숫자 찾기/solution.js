const solution = (num, k) => {
  let answer = num.toString().indexOf(k.toString());
  answer >= 0 ? (answer = answer + 1) : -1;
  return answer;
};

/*
다른 사람의 풀이 공부

function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}

*/
