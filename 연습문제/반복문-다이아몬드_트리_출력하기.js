/*
문제 : 아래 출력 결과대로 출력하는 코드 짜기

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


   */

let output = ''
const size = 5

for (let i = 1; i <= size; i++) {
    for (let j = size; j>i; j--) {
        output += ' '
    }
    for (let k = 0; k < i*2-1; k++) {
        output += '*'
    }
    output += '\n'
}
for (let i = size-1; i>0; i--) {
    for (let j = size; j>i; j--) {
        output += ' '
    }
    for (let k=0; k < 2*i -1; k++) {
        output += '*'
    }
    output += '\n'
}

console.log(output)

//문제 출처 : '혼자 공부하는 자바스크립트' - 윤인성 (한빛미디어 출판)