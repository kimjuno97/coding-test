function solution(name, yearning, photo) {
    const obj = {};
    name.forEach((name,index)=> {
        obj[name] = yearning[index];
    })
    
    return photo.map((arr) => (
        arr.reduce((acc, curr) => (acc + (obj[curr] ?? 0)),0)
    ))
}
