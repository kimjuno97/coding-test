function solution(spell, dic) {
    const isThere = [];
    // dic 배열의 원소 하나에 대하여 spell을 검사한다.
    dic.forEach((word) => {
        let count = 0;
       // spell의 원소가 포함되어 있다면 count를 증가시킨다. 
        spell.forEach((item) => {
            if(word.includes(item)){
                count += 1;
            }
        })
        // spell의 길이와 count가 같으면 조건에 해당
        if(count === spell.length){
            isThere.push(word);
        }
    })
    return isThere.length === 0 ? 2 : 1;
}


function solution(spell, dic) {
    return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
}
