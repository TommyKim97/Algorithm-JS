function solution(array) {
  let sorted = array.sort((a, b) => a - b);
  let middle = Math.floor(array.length / 2);
  return sorted[middle];
}
