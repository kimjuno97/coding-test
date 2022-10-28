function solution(money) {
    const count = Math.floor(money / 5500);
    const divison = money % 5500;  
    return [count, divison]
}