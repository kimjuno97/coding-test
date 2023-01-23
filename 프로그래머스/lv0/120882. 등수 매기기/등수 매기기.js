function solution(score) {
    const answer = score.reduce((acc,cur)=>[...acc, cur[0]+cur[1]],[])
    
    return answer.map((n,i,arr)=>{
        let rank = 1;
        arr.forEach(u =>{
            if(u>n){
                rank += 1
            }
        })
        return rank
    })
}