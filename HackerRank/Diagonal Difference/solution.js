const diagonalDifference = (arr) => {
  const len = arr.length;

  let leftToRight = 0;
  let rightToLeft = 0;

  for (let i = 0; i < len; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][len - 1 - i];
  }
  return Math.abs(leftToRight - rightToLeft);
};
