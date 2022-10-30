//태어난 해의 간과 띠 구하기
//1. 사용자 입력창에 태어난 해를 입력
//2. 입력한 해의 간과 띠 출력

const rawInput = prompt('태어난 해를 입력하세요.', '');
const year = Number(rawInput);

let 간;
switch (year % 10) {
    case 0 :
        간 = '경';
        break;
    case 1 :
        간 = '신';
        break;
    case 2 :
        간 = '임';
        break;
    case 3 :
        간 = '계';
        break;
    case 4 :
        간 = '갑';
        break;
    case 5 :
        간 = '을';
        break;
    case 6 :
        간 = '병';
        break;
    case 7 :
        간 = '정';
        break;
    case 8 :
        간 = '무';
        break;
    case 9 :
        간 = '기';
        break;
};

let 띠;
switch (year % 12) {
    case 0 :
        띠 = '신';
        break;
    case 1 :
        띠 = '유';
        break;
    case 2 :
        띠 = '술';
        break;
    case 3 :
        띠 = '해';
        break;
    case 4 :
        띠 = '자';
        break;
    case 5 :
        띠 = '축';
        break;
    case 6 :
        띠 = '인';
        break;
    case 7 :
        띠 = '묘';
        break;
    case 8 :
        띠 = '진';
        break;
    case 9 :
        띠 = '사';
        break;
    case 10 :
        띠 = '오';
        break;
    case 11 :
        띠 = '미';
        break;
}

alert(`${year}년은 ${간}${띠}년입니다.`);

//문제 출처 : '혼자 공부하는 자바스크립트' - 윤인성 (한빛미디어 출판)