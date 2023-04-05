const solution = (s1, s2) => {
  let result = 0;
  s1.forEach((el) => {
    for (let i = 0; i < s2.length; i++) {
      el === s2[i] ? (result += 1) : null;
    }
  });
  return result;
};

/*
다른 풀이 공부

function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}

filter를 사용해서 훨씬 간단하게 해결할 수 있다.
forEach문으로 작성한 코드보다 0.02ms 빠른 속도로 해결되었다.

 */
