function solution(my_string) {
    return my_string.split('').filter(x=>{
        if(!isNaN(x)){
            return x
        }
    }).map(x=>Number(x)).sort((a,b)=> a-b)
}