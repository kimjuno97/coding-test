function solution(lines) {
  const answer = new Array(201).fill(0);
  
  lines.forEach(([start, end]) => {
    for (let j = start; j < end; j++) {
      answer[100 + j]++;
    }
  });
  
  return answer.filter(count => count > 1).length;
}