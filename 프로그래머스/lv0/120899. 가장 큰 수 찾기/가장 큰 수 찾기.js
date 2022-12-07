function solution(array) {
    let largeNum = 0;
    for(let i=0; i<array.length; i++){
        if(largeNum < array[i]){
            largeNum = array[i];
        }
    }
    return [largeNum, array.findIndex((num)=>num===largeNum)];
}