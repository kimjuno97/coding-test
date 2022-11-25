function solution(my_string) {
    const strArray = my_string.split('');
    const resultArray =[];
    for(let i=0; i<strArray.length; i++){
        if(resultArray.indexOf(strArray[i]) === -1){
            resultArray.push(strArray[i])
        }        
    }
    return resultArray.join('')
}