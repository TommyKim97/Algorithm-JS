function plusMinus(arr) {
  // Write your code here
  const { positive, negative, zero } = arr.reduce(
    (acc, val) => {
      if (val > 0) {
        acc.positive += 1;
      } else if (val === 0) {
        acc.zero += 1;
      } else {
        acc.negative += 1;
      }
      return acc;
    },
    {
      positive: 0,
      negative: 0,
      zero: 0,
    }
  );
  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}
