/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：哈希算法
// 方法二：投票算法
// 初始化一个候选人 candidate 和计数器 count
// 遍历数组：
// 如果 count === 0，就把当前数设为候选人
// 如果当前数 == 候选人，count++
// 否则 count--
var majorityElement = function(nums) {
    let candidate = null
    let count = 0
    for(let num of nums){
      if(count === 0){
        candidate = num
      }
      if(num === candidate){
        count++
      }else {
        count--
      }
    }
    return candidate
};
nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums));
