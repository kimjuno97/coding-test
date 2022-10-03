function solution(arr) {
    if (arr.length <= 1) return [-1]
    const newArry = arr;
    let small = arr[0];
    let index = 0;
    for (let i=1; i<arr.length; i++){
        if(arr[i]<small) {
            small = arr[i];
            index = i;
        }
    } 
    newArry.splice(index,1);
    return newArry;
}