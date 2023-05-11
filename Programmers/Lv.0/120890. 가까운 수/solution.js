const solution = (array, n) => {
  let result = [];

  array.forEach((v) => {
    result.push(Math.abs(v - n));
  });

  const min = Math.min(...result);

  let check = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i] === min) {
      check.push(array[i]);
    }
  }

  return Math.min(...check);
};
