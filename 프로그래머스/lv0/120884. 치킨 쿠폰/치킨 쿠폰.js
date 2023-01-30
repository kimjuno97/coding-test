function solution(chicken) {

    let eatenChicken = chicken; // 총 먹을 수 있는 치킨
    let coupons = chicken;  // 쿠폰 개수
    while(coupons >= 10){
        eatenChicken = eatenChicken + parseInt(coupons/10);
        coupons = coupons%10 + parseInt(coupons/10);
    };    
    return eatenChicken-chicken;
}
