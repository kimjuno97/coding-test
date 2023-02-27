function solution(n) {
  const filteredArr = [];

  for (let i = 1; filteredArr.length < n; i++) {
    if (i % 3 !== 0 && !i.toString().includes("3")) {
      filteredArr.push(i);
    }
  }

  return filteredArr[n - 1];
}