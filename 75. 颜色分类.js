/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针法:
// 我们维护三个区域：
// 0区：[0...p0-1]
// 1区：[p0...i-1]
// 2区：[p2+1...n-1]
var sortColors = function(nums) {
  let p0 = 0, i = 0, p2 = nums.length -1
  while( i <= p2){
    if(nums[i] === 0){
      [nums[i], nums[p0]] = [nums[p0] , nums[i]]
      p0++
      i++
    }else if(nums[i] === 2){
      [nums[i], nums[p2]] = [nums[p2] , nums[i]]
      p2--
      // 注意：i不加1，应为换过来的数还没有检查
    }else {
      i++
    }
  }
};