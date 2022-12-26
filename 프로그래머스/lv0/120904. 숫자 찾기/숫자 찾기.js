function solution(num, k) {
    const arr = String(num) 
    let result = arr.split('').map(n=>parseInt(n)).indexOf(k)
    return  result === -1 ? result : result + 1
}