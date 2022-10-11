function solution(n, m) {
  const result = greatestCommonDivisor(n, m);
  return [result, (n * m) / result];
}

const greatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  else return greatestCommonDivisor(b, a % b);
};