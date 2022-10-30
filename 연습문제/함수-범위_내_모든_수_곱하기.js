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