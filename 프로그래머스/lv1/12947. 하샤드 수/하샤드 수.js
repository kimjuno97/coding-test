function solution(x) {
    const xArry = String(x).split('').map(str=>Number(str))
    const xhasard = xArry.reduce((prev,current) => prev + current)
    return x % xhasard === 0
}
