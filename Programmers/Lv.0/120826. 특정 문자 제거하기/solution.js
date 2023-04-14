const solution = (my_string, letter) => my_string.replaceAll(letter, "");

/*
다른 시각 살펴보기

function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

letter를 기준으로 나누고 join()으로 합치는 방법
*/
