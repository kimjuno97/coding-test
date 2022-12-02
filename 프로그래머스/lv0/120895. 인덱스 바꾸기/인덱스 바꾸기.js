function solution(my_string, num1, num2) {
    const pre = my_string[num1];
    const back = my_string[num2];
    return my_string.split('').map((str,index)=>{
        if(index === num1){
            return back
        } else if (index === num2){
            return pre
        } else {
            return str
        }
    }).join("")
}