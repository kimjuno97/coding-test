function solution(a, b){
    let result = (a<b) ? a : b;
    while(a!=b){
      result += (a<b) ? ++a : ++b;
    }    
    return result;
}