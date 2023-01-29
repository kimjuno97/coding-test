function solution(id_pw, db) {
    const [user_id, user_pw] = id_pw;
    let answer = 'fail';
    db.forEach(info => {
        const [id, pw] = info;
        if(user_id === id && user_pw === pw) {
            answer = 'login'
        } else if(answer !== 'login' && user_id === id) {
            answer = 'wrong pw'
        }
    })
    return answer;
}

// 다른 사람 풀이
function solution(id_pw, db) {
    let answer = 'fail';
    for(let i of db){
        if(i[0] === id_pw[0] && i[1] === id_pw[1]) answer = 'login';
        else if(i[0] === id_pw[0] && i[1] !== id_pw[1]) answer= 'wrong pw';
    }

    return answer;
}