const solution = (babbling) => {
  let res = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) res++;
  });

  return res;
};
