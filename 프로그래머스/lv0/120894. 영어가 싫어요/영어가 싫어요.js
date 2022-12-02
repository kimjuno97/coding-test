function solution(numbers) {
    const matches = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    }
    const regexp = /(zero|one|two|three|four|five|six|seven|eight|nine)/g
    const str = numbers.match(regexp)
    return Number(str.map(num =>matches[num]).join(''))
}