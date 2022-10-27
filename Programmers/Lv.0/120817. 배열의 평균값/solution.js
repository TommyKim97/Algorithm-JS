//내가 작성한 답안
function solution(numbers) {
    var answer = 0;
    var sum = 0;
    for (let i =0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    answer = sum / numbers.length
    return answer;
}

//reduce로 작성해보기
function solution(numbers) {
    return numbers.reduce((acc, cur) => acc + cur) / numbers.length
}

//for of 반복문 사용해보기
function solutions(numbers) {
    var answer = 0
    for(i of numbers) {
        answer += i
    }
    return answer / numbers.length
}