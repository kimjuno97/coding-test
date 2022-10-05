function solution(s) {
    const arry = s.split('');
    while(arry.length > 2) {
        arry.shift();
        arry.pop();
    }
    return arry.join('');
}