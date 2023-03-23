//문제 : 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

const n = prompt("텍스트를 입력하세요.");

const reverseString = n.split("").reverse().join("");
/*
- split() 메서드 : 문자열을 배열로 만들어 반환
    - 괄호 안에 어떤 것을 기준으로 나눌지 넣지 않으면 배열 적용이 되지 않았음. 이 문제의 경우 따옴표를 넣어서 음절 단위로 나눴음.
- reverse() 메서드 : 배열의 순서를 반전
- join() 메서드 : 원소를 모두 붙여 문자열로 반환
    - 괄호 안에 따옴표를 넣지 않으니 쉼표(,)로 구분되었음.
*/

//콘솔 출력
// console.log(reverseString);

//화면 출력
document.write(reverseString);
