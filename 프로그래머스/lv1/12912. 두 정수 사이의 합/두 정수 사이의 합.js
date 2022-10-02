function solution(a, b) {
    if(a>b){
        let result = b
        for ( let i=b+1;i<=a;i++ ){
            result += i
    }
    return result
    }
    
    let result = a
    for ( let i=a+1;i<=b;i++ ){
        result += i
    }
    return result
}