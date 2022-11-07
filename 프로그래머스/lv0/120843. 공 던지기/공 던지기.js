function solution(numbers, k) {
    let arry = [...numbers]
    for(let i=0; i<k; i++){
        arry = [...arry,...numbers]
    }
    return arry[(k-1)*2]
}