//문제 : 다음 과정에 따라 최대값을 찾는 max()함수 만들기

//조건 1. 매개변수로 max([1,2,3,4])와 같은 배열을 받는 max()함수 만들기
const max = function (array) {
    let output = array[0];
    for (const data of array) {
        if (output < data) {
            output = data;
        }
    }
    return output;
}
console.log(max([1,2,3,4])); //4


//조건 2. 매개변수로 max2(1,2,3,4)와 같이 숫자를 받는 max2()함수 만들기
//나머지 매개변수 활용
const max2 = function (...array) {
    let output = array[0];
    for (const data of array) {
        if (output < data) {
            output = data;
        }
    }
    return output;
} 
console.log(max2([1,2,5,4])); //5


//조건 3. max3([1,2,3,4])형태와 max3(1,2,3,4) 형태를 모두 입력할 수 있는 max3()함수 만들기

//일반 매개변수와 나머지 매개변수의 조합
const max3 = function (first, ...rests) {
    //변수 선언
    let output;
    let items;
    //매개변수의 자료형에 따라 조건분기하기
    //Array.isArray() 메소드 활용해서 자료가 배열인지 확인 후 값을 넣기
    if (Array.isArray(first)) {
        output = first[0];
        items = first;
    } else if (typeof(first) === 'number') {
        output = first;
        items = rests;
    }
    //최대값 구하기
    for (const data of items) {
        if (output < data) {
            output = data;
        }
    }
    return output;
}
//출력
console.log(`max3(배열) : ${max3([1,6,3,8])}`); //max3(배열) : 8
console.log(`max3(숫자, ...) : ${max3(4,8,9,0)}`); //max3(숫자, ...) : 9


//문제 출처 : '혼자 공부하는 자바스크립트' - 윤인성 (한빛미디어 출판)