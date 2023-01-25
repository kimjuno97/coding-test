function solution(keyinput, board) {
    const [rangeMinX, rangeMaxX] = [-(board[0]-1) / 2, (board[0]-1) / 2]
    const [rangeMinY, rangeMaxY] = [-(board[1]-1) / 2, (board[1]-1) / 2]
    const answer = [0, 0];
    keyinput.forEach(key => {
        switch (key) {
            case 'left':
                if(answer[0] > rangeMinX){
                    answer[0] = answer[0] - 1 ;
                }    
                break;
            case 'right':
                if(answer[0] < rangeMaxX){
                    answer[0] = answer[0] + 1 ;    
                }
                break;
            case 'up':
                if(answer[1] < rangeMaxY){
                    answer[1] = answer[1] + 1;    
                }
                break;
            case 'down':
                if(answer[1] > rangeMinY){
                    answer[1] = answer[1] - 1;                   
                }
                break;
        }
    })
    return answer;
}