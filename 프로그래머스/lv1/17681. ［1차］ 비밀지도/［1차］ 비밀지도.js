function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    let row = (arr1[i] | arr2[i]).toString(2); 
    row = "0".repeat(n - row.length) + row;
    row = row.replace(/[10]/g, (a) => (+a ? "#" : " "));
    answer.push(row);
  }
  return answer;
}