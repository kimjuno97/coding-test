function solution(clothes) {
    let answer = 1;
    // obj
    const obj = {};
    clothes.forEach(clothe => {
        if (obj[clothe[1]]){
            obj[clothe[1]] += 1
        } else{
            obj[clothe[1]] = 1;
        }
    });
    const keys = Object.keys(obj);
    keys.forEach(key => {
        answer *= obj[key] + 1;
    })
    return answer - 1;
}