const solution = (my_string, num1, num2) => {
  const result = [...my_string];
  result.splice(num1, 1, my_string[num2]);
  result.splice(num2, 1, my_string[num1]);
  return result.join("");
};

/*
다른 풀이 

* 구조분해 할당 이용

const solution (my_string, num1, num2) {
    my_string = my_string.split("");
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join("");
}

*/
