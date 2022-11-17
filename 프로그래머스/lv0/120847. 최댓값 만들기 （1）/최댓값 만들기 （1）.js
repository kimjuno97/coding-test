function solution(numbers) {
    sortArray = numbers.sort((a,b)=> a-b);
    return sortArray[sortArray.length-1] * sortArray[sortArray.length-2]
}