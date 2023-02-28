function solution(n) {
  const filteredArr = [];

  for (let i = 1; filteredArr.length < n; i++) { 
      // 조건에 해당되는 것을 push
    if (i % 3 !== 0 && !i.toString().includes("3")) {
      filteredArr.push(i);
    }
  }
  // 0번부터 시작하니 -1
  return filteredArr[n - 1];
}
