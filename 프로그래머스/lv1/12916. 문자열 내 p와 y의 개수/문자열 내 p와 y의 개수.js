function solution(s){
    let pCount = 0;
    let yCount = 0;
        
    s.toLowerCase().split('').map(num => {
        if (num === 'p') {
            pCount += 1
        } else if (num === 'y') {
            yCount += 1
        }
    })
    return pCount === yCount
}