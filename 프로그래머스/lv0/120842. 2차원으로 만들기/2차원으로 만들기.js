function solution(num_list, n) {
    const answer = [];
    const count =num_list.length/n
    for(let i=0; i<count; i++){
        const smallArry = [];
        for(let t=0; t<n; t++){
            smallArry.push(num_list.shift())
        }
        answer.push(smallArry)
    }
    return answer;
}