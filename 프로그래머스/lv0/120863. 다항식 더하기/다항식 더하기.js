function solution(polynomial) {
    const answer = polynomial.split(' + ');

    const numberArr = answer.filter(x=> !x.includes('x'));
    const variableX = answer.filter(x=> x.includes('x'));
    
    const sumNumber = numberArr.reduce((acc,cur)=> acc + Number(cur), 0)
    /** x가 없을 경우 숫자만 리턴 */
    if(!variableX[0]) {
        return `${sumNumber}`; // string으로 리턴 해야함.
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




/** 
function solution(polynomial) {
    const polyArr = polynomial.split(" + ");
    
    let xNum = 0;
    let num = 0;
    
    polyArr.forEach((item) => {
        if(item.includes("x")){
            const xArr = item.split("x");
            
            if(xArr[0] === ""){
                xNum += 1;
            }
            
            if(xArr[0] !== ""){
                xNum += Number(xArr[0]);
            }
        }
        
        if(!item.includes("x")){
            num += Number(item);
        }
    })
    
    if(xNum !== 0 && num !== 0){
        return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;    
    }
    
    if(xNum !== 0 && num === 0){        
        return xNum === 1 ? "x" : `${xNum}x`;
    }
    
    if(xNum === 0 && num !== 0){
        return `${num}`;
    }
    
    if(xNum === 0 && num === 0){
        return "0";
    }
} 
*/