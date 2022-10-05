function solution(n) {
    let answer = '수';
    for(let i=1; i<n; i++){
        if(answer.length % 2){
            answer += '박'
        } else {
            answer += '수'
        }
    }
    return answer;
}