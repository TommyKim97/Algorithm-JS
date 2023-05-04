const solution = (rsp) => {
  return Array.from(rsp)
    .map((v) => {
      switch (+v) {
        case 2:
          return 0;
        case 0:
          return 5;
        case 5:
          return 2;
      }
    })
    .join("");
};

/**
 * 다른 풀이 공부
 *
 * const solution = (rsp) => {
 *  const rspWin = {2:0, 0:5, 5:2}
 *  return [...rsp].map( x => rspWin[x]).join("");
 * };
 *
 * 1. value에 각각 이기는 경우를 대입해서 객체로 만든다.
 * 2. rsp를 배열로 만들고 map을 사용해서 key에 대응하는 value를 반환하도록 한다.
 * 3. 이를 문자열로 바꾸어준다.
 */
