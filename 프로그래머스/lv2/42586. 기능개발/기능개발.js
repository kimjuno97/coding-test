function solution(progresses, speeds) {
  const answer = [];
  const workday = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  
  let deploy = 1;
  while (workday.length > 0) {
    let first = workday[0];
    if (first < workday[deploy]) {
      workday.splice(0, deploy);
      answer.push(deploy);
      deploy = 1;
    } else {
      deploy += 1;
      if (first === Math.max(...workday)) {
        answer.push(workday.length);
        workday.splice(0, workday.length);
      }
    }
      console.log(workday)
  }

  return answer;
}