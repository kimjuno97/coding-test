function solution(operations) {
    let answer = [];
    operations.forEach(x=>{
        if(x.includes("I")){
            const num = Number(x.split(" ")[1])
            answer.push(num);
        } else if(x === "D -1"){
            answer = answer.filter((x,i) => i !== answer.indexOf(Math.min(...answer)));          
        } else if(x === "D 1"){
            answer = answer.filter((x,i) => i !== answer.indexOf(Math.max(...answer)));       
        }
    }) 
    return answer.length === 0 ? [0,0] : [Math.max(...answer), Math.min(...answer)];
}