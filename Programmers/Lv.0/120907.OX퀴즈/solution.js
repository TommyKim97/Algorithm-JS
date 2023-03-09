function solution(quiz) {
  return quiz.map((el) => {
    let [calc, result] = el.split("=");
    calc = eval(calc);
    if (calc == result) {
      return "O";
    }
    return "X";
  });
}
