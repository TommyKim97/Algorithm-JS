const solution = (s) => {
  let str = s.split("");
  let special = [];
  str.forEach((el) => {
    str.indexOf(el) === str.lastIndexOf(el) ? special.push(el) : null;
  });
  return special.sort().join("");
};

/*
다른 풀이 공부

function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}

indexOf()와 lastIndexOf()를 문자열에 바로 적용해서 좀 더 간결하게 작성할 수 있다.
*/
