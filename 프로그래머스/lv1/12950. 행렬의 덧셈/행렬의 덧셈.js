function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((arry, idx) => {
    answer.push(arry.map((num, index) => num + arr2[idx][index]));
  });
  return answer;
}