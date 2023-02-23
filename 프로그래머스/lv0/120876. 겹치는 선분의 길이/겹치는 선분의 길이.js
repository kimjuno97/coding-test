function solution(lines) {
    var answer = new Array(201);
    answer.fill(0);
    
    for(let i = 0; i < 3; i++) {
        let start = lines[i][0];
        let end = lines[i][1];
        for(let j = start; j < end; j++){
            answer[100 + j] += 1;
        }
    }
    
    let temp = 0;
    
    for(let i = 0; i <= 200; i++){
        if(answer[i] > 1){
            temp++;
        }
    }
    
    return temp;
}
