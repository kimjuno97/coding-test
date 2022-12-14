function solution(array, commands) {
    const answer = [];
    commands.forEach((arr,index) => {
        const [begin, end, target] = arr;
        const newArray = array.slice(begin-1, end).sort((a,b) => a-b);
        answer.push(newArray[target-1]);
    })
    return answer;
}