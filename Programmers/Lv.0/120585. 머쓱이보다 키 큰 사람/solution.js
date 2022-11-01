function solution(array, height) {
    let answer = array.filter(v => v > height).length;
    return answer;
}

//filter() 메소드로 height값보다 큰 값들의 배열을 뽑아내고 길이를 출력