function solution(name, yearning, photo) {
    const obj = {};
    name.forEach((name,index)=> {
        obj[name] = yearning[index];
    })
    
    return photo.map((arr) => (
        arr.reduce((acc, curr) => (acc + (obj[curr] ?? 0)),0)
    ))
}

// 다른 사람 풀이 
function solution(name, yearning, photo) {
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}

// 느낀점. 
// obj 변수를 선언 할 필요가 없었다.