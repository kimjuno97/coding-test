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