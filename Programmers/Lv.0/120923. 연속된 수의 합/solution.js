function solution(num, total) {
  const middle = parseInt(total / num);
  let idx, dis;
  let answer = new Array(num);
  if (num % 2 === 1) {
    idx = parseInt(num / 2);
  } else {
    idx = parseInt(num / 2) - 1;
  }
  answer[idx] = middle;
  for (let i = 0; i < num; i++) {
    if (i > idx) {
      dis = i - idx;
      answer[i] = middle + dis;
    } else if (i === idx) {
      continue;
    } else {
      dis = idx - i;
      answer[i] = middle - dis;
    }
  }
  return answer;
}

/*
다른 사람의 풀이

function solution(num, total) {
    let min = Math.ceil(total/num - Math.floor(num/2));
    let max = Math.floor(total/num + Math.floor(num/2));

    return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}

*/
