function solution(s) {
    return s.split('').filter((str,idx)=>{
        let result = 0;
        for(let i=0; i<s.length; i++){
            if(str === s[i]){
                result += 1
            }
        }
        return result === 1 && str
    }).sort().join('')
}