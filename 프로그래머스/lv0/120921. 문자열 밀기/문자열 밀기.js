function solution(A, B) {
  if (A === B) return 0;

  for (let i = 0; i < A.length; i++) {
    let rotated = A.slice(A.length - i) + A.slice(0, A.length - i);
    if (rotated === B) return i;
  }

  return -1;
}