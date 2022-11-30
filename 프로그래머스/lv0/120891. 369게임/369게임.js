function solution(order) {
    const str = String(order).split("");
    let result = 0;
    for (let i=0; i<str.length; i++){
        const check = str[i];
        if(check === '3' || check === '6' || check ==='9'){
            result++;
        }
    }
    return result;
}