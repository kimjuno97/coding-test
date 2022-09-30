function solution(x, n) {
    let nextCount = 0;
    const result = [];
    for (let i=0; i<n; i++){
        nextCount += x;
        result.push(nextCount);
    }
    return result;
}