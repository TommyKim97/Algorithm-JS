const solution = (cipher, code) => {
  let result = [];
  for (let i = 1; i < cipher.length / code + 1; i++) {
    result.push(cipher[code * i - 1]);
  }
  return result.join("");
};
