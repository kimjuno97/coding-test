function solution(my_string) {
    return my_string.split('')
        .filter(x=>{if(!isNaN(x)) return x})
        .reduce((sum,num)=> sum*1 + num*1, 0)

}