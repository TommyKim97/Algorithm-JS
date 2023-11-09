/**
 * spell : 알파벳 배열
 * dic : 외계어 사전
 * spell에 있는 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 : 1
 * 없다면 2 반환
 *
 * dic에 있는 내용물을 오름차순으로 정렬, 일치하는 게 있으면 거리기
 *
 */

const solution = (spell, dic) => {
  let answer = [];
  dic.forEach((el) => {
    el.sort();
  });
};
