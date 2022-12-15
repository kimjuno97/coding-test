function solution(brown, yellow) {
    for(let i=0; i<=yellow; i++){
        if(!Number.isInteger(yellow / i)) continue;
        
        const n = yellow / i;
        const width = n + 2;
        const height = i + 2;
        
        if(i*2 + width*2 === brown){
            return [width, height]
        }
    }
}
