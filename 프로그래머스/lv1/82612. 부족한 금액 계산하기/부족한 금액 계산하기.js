function solution(price, money, count) {
    let result = -money;
    for (let i=1; i<=count; i++){
        result += price *i;
    }
    if( result <= 0){
        return 0;
    } else {
        return result;
    }
}