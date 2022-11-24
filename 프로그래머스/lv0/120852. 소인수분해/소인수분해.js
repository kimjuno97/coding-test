function solution(n) {
    let result =[]
    while (n%2 == 0) {
        if(!result.includes(2)) result.push(2)

        n = n/2
    }
    for (let i=3;i*i <= n;i=i+2) {
        while (n%i==0) {
            if(!result.includes(i)) result.push(i)
            n = n/i
        }
    }
    if (n>2) {
        result.push(n)
    }
    return result
}
