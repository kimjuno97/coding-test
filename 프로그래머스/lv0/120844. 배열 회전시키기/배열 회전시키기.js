function solution(numbers, direction) {
    let result = [...numbers];
    if(direction === 'right'){
        result.pop();
        result.unshift(numbers[numbers.length -1 ]);
    } else if(direction === 'left'){
        result.shift();
        result.push(numbers[0]);
    }
    return result;
}