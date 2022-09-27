function solution(n) {
    let result = -1;
    for( let i=1; i <= n; i++) {
        if( n === i**2) {
            result = (i+1)**2;
            break;
        }  
    }
    return result
}