const solution = (emergency) => {
  const sortedArr = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sortedArr.indexOf(v) + 1);
};
