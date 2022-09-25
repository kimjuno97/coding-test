function solution(n) {
    divisor = 0;
for(let i = 0; i<n+1; i++){
    n%i ? 0 : divisor+=(i*1)
}
    return divisor
}