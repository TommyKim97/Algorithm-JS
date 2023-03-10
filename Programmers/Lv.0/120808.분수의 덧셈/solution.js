//최대 공약수 구하는 함수
function getGcd(a, b) {
  return a % b === 0 ? b : getGcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
  let denom = denom1 * denom2;
  let numer = denom1 * numer2 + denom2 * numer1;
  let gcd = getGcd(denom, numer);

  return [numer / gcd, denom / gcd];
}
