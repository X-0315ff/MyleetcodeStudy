/**
 * @param {number[]} nums
 * @return {number}
 */
// 设 nums 的元素之和为 s。
// 设中心下标为 i，其左侧元素和为 leftS=nums[0]+nums[1]+⋯+nums[i−1]，那么右侧元素和为 s−nums[i]−leftS。
// 由于左侧元素和等于右侧元素和，所以有
// leftS=s−nums[i]−leftS
// 即
// 2⋅leftS=s−nums[i]
// 从左到右遍历数组，一边遍历，一边累加元素更新 leftS。每次累加前，检查是否满足上式，满足则返回 i。
// 如果不存在这样的 i，返回 −1。
var pivotIndex = function(nums) {
    let s = nums.reduce( (a,b) => a + b , 0)
    let leftS = 0
    for(let i = 0; i < nums.length; i++){
      if(2 * leftS === s - nums[i]){
        return i
      }
      // 要先判断再累加，表示 中心下标i 从 0 开始
      leftS += nums[i]
    }
    return -1
};
nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums));
