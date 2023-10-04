function solution(clothes) {
    // 0번인덱스 선택했을때 개수 넣기
    let answer = 1;
    
    const obj = {};
    // 각 의상의 종류별로 개수를 세기
    clothes.forEach(clothe => {
        if (obj[clothe[1]]){
            obj[clothe[1]] += 1
        } else{
            obj[clothe[1]] = 1;
        }
    });

    // 의상 종류별로 입을 수 있는 경우의 수 계산
    const keys = Object.keys(obj);
    keys.forEach(key => {
        answer *= obj[key] + 1;
    })
    // 아무 의상도 입지 않는 경우 제외:
    return answer - 1;
}