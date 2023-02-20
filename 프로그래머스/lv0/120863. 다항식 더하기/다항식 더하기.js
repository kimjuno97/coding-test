function solution(polynomial) {
    const answer = polynomial.split(' + ');

    const numberArr = answer.filter(x=> !x.includes('x'));
    const variableX = answer.filter(x=> x.includes('x'));
    
    const sumNumber = numberArr.reduce((acc,cur)=> acc + Number(cur), 0)
    /** x가 없을 경우 숫자만 리턴 */
    if(!variableX[0]) {
        return `${sumNumber}`;
    }
    /** x가 붙은 수 구하기 */
    const computedVariableX = variableX.reduce((acc,cur)=>{
        if(!Number(cur.slice(0, -1))){
            return acc + 1;
        } else{
            return acc + Number(cur.slice(0, -1))
        }
    },0);
    /** 1x인 경우 x로 표현 */
    const resultX = computedVariableX === 1 ? 'x' : `${computedVariableX}x`;
    
    if(sumNumber === 0){
          return resultX;
    }
    
    return `${resultX} + ${sumNumber}`;
}