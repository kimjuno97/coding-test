function solution(dots) {
    const dotX = [];
    const dotY = [];
    dots.forEach(dot => {
        dotX.push(dot[0]);
        dotY.push(dot[1]);
    })
    dotX.sort((a,b) => a-b);
    dotY.sort((a,b) => a-b);
    return (dotX[3] - dotX[0]) * (dotY[3] - dotY[0]);
}
