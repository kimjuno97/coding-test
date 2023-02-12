function solution(num, total) {
    let start = Math.floor((total - num * (num - 1) / 2) / num);
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(start + i);
    }
    return result;
}