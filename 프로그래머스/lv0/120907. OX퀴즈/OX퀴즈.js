function solution(quiz) {
    const answer = quiz.map(data=>data.split(' '));
    return answer.map(calcul => {
        const [num1, sign, num2, _ , result] = calcul
        if(sign === '-'){
            return Number(num1) - Number(num2) === Number(result) ? 'O' : 'X'
        } else {
            return Number(num1) + Number(num2) === Number(result) ? 'O' : 'X'
        }
    })
}