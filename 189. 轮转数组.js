/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 数组翻转法 O(n) 时间复杂度，O(1) 额外空间
var rotate = function(nums, k) {
  k = k % nums.length
  
  // 数组整体翻转
  // 注意：只交换前半部分。
  for(let i = 0; i < Math.floor(nums.length / 2); i++){
    // ES6 解构赋值的交换方式:
    // 计算 nums[nums.length-1] 和 nums[i] 的值。
    // 生成一个临时的数组 [nums[nums.length-1], nums[i]]。
    // 解构赋值：将临时数组的值重新赋给 nums[i] 和 nums[nums.length-1]，从而实现交换。
    [nums[i],nums[nums.length-1-i]] = [nums[nums.length-1-i],nums[i]]
  }
  // 前k个值翻转
  for(let i = 0; i < Math.floor(k / 2); i++){
    [nums[i],nums[k-1-i]] = [nums[k-1-i],nums[i]]
  }
  // 剩下的翻转
  for(let i = 0; i < Math.floor((nums.length - k)  / 2);i++){
    [nums[k + i],nums[nums.length - 1 -i]] = [nums[nums.length - 1 -i],nums[ k + i]]
  }
  // console.log(nums.join(','));
  
};
// 逐个右移法：时间复杂度 n*k
// var rotate = function(nums, k) {
//   k = k % nums.length
//   // console.log('k=',k)
//   for(let i = 0; i < k; i++){
//     // pop方法移除数组的最后一个元素并返回该元素
//     // unshift方法在数组前面插入一个新元素，并返回新的数组长度
//     nums.unshift(nums.pop())
//   }
//   // console.log(nums.join(","));
// };
nums = [1,2,3,4,5,6,7]
k = 3
rotate(nums,k)