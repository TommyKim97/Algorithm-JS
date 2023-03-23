/*
문제 : 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다. 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
*/

//입력받은 값을 공백을 기준으로 나눔
const keys = prompt("이름을 입력하세요.").split(" ");
const values = prompt("점수를 입력하세요.").split(" ");

//객체 선언
const obj = {};

//인덱스 맞는 key와 value(10진수로 변환)를 짝지음
for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = parseInt(values[i], 10);
}

//출력
console.log(obj);
