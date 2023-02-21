function solution(numlist, n) {
  // 각 개체가 원래 값과 n으로부터의 거리를 포함하는 개체 배열을 만듭니다.
  let distances = numlist.map(value => {
    return { value, distance: Math.abs(value - n) };
  });
  // 배열을 거리순으로 정렬한 다음 값순으로 정렬(내림차순)
  distances.sort((a, b) => {
    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    } else {
      return b.value - a.value;
    }
  });

  // 정렬된 값으로만 새 배열 만들기
  let answer = distances.map(obj => obj.value);

  return answer;
}
