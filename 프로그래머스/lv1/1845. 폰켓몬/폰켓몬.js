function solution(nums) {
    const result = nums.sort().filter((num,i)=> {if(nums.indexOf(num) === i) return num }).length
    return result > nums.length/2 ? nums.length/2 : result
}