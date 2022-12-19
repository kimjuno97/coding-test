function solution(array, n) {
    var answer = 0;
    array.forEach(num=>{
        if(num === n){
            answer += 1;
        }
    })
    return answer;
}