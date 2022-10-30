//문제 : A부터 B까지 범위를 지정했을 때 범위 안의 모든 숫자를 모두 곱하는 함수를 만들기


const multiplyAll = function (a, b) {
    let output = 1;
    for (let i = a; i <= b; i++) {
        output *= i;
    }
    return output;
}

console.log(multiplyAll(1,2)); // 2
console.log(multiplyAll(1,3)); //6


//문제 출처 : '혼자 공부하는 자바스크립트' - 윤인성 (한빛미디어 출판)