function solution(array, height) {
    var answer = 0;
    array.forEach(h => {
        if(h>height){
            answer +=1;
        }
    })
    return answer;
}