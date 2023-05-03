const solution = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result.length;
};

// 모든 약수의 수는 순서쌍의 개수와 같음