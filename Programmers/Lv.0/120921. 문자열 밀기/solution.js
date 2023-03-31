function solution(A, B) {
  let arr = [...A];
  for (let i = 0; i < arr.length; i++) {
    if (A === B) return i;
    else {
      arr.unshift(arr.pop());
      if (arr.join("") === B) return i + 1;
    }
  }
  return -1;
}

/*
다른 풀이 방법 공부

let solution=(a,b)=>(b+b).indexOf(a)

b를 두 번 반복시킨 다음 a가 그 안에 있는지 찾아보면 밀었을 때 그 글자를 만들 수 있는지 알 수 있다.
indexOf 자체가 값이 없으면 -1을 출력하기 때문에 간결한 방법이다.
*/
