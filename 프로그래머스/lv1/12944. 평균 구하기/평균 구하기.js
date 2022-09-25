function solution(arr) {
    let result = 0;
    arr.forEach(num => result += num );
    return result / arr.length;
}