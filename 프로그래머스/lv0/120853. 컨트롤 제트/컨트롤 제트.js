function solution(s) {
    const arry = s.split(" ");
    while(arry.indexOf('Z') !== -1){
        const indx = arry.indexOf("Z")
        arry.splice(indx-1, 2);
    }
    return arry.reduce((prev,current)=>prev*1 + current*1,0)
}