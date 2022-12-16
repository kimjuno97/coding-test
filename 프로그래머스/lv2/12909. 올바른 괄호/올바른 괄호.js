function solution(s) {
    // 처음 부터 안맞는 조건 배제
  if(s.length === 1 || s[0] === ")") return false;

  let p = 0;

  for(let i = 0 ; i < s.length ; i++) {
    // '( 이 오면 카운터 + 1 해준다. 카운터 p 수만큼 ')' 이 오면 된다.'
    if(s[i] === "(") {
      p+=1;
    } else {
    // ')'이 나왔는데, p가 1보다 작다? 그것은 ')'이 더많다는 뜻 false 
      if(p < 1) return false;
    // p가 ')'이면 카운터 줄여준다.
      p-=1;
    }
  }
    // p가 남으면 '(', ')'이 같은 개수가 아닌 것이므로 false
  return p > 0 ? false : true;
}