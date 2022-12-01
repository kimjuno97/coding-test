function solution(my_string) {
    return my_string.split("").map(str=>{
        if(str.match(`[A-Z]`)){
            return str.toLowerCase();
        } else {
            return str.toUpperCase();
        }
    }).join("");
}