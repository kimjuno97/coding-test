function solution(nums){
     const result = nums.filter((num,i) => nums.indexOf(num) ===i).length
     return result > nums.length/2 ? nums.length/2 : result
}