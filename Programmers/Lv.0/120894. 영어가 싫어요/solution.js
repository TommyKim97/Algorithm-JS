const solution = (numbers) => {
  let numStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numStr.forEach((str, index) => {
    numbers = numbers.replaceAll(str, index);
  });
  return Number(numbers);
};

/*
다른 풀이

* replace, 콜백 활용

const solution = (numbers) => {
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };
    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return obj[v];
    });

    return Number(num);
}

*/
