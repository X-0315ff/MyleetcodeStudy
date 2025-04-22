/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 三步法 :本质思路：找到比当前排列大的“最小”排列
// 步骤 1：从后往前，找到第一个 破坏递减顺序 的位置 i : 找到第一个满足 nums[i] < nums[i+1] 的位置 i，这里是可以让排列“变大”的突破口。
// 步骤 2：再从后往前，找到第一个比 nums[i] 大的最小数 nums[j]，交换
// 步骤 3：反转 i+1 到末尾，让右边变得“最小”
var nextPermutation = function(nums) {
  let i = nums.length - 2
  // step1：从后往前找到第一个 nums[i] < nums[i+1] 的位置
  while(i >= 0 && nums[i] >= nums[i + 1]){
    i--
  }
  // step2: 从后往前找到第一个比 nums[i] 大的数 nums[j]
  if( i >= 0 ){
    let j = nums.length -1
    while( j >= 0 && nums[i] >= nums[j]){
      j--
    }
    // 交换 nums[i] 和 nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]]

  }
  // Step 3: 将 i+1 到末尾翻转，变成最小序列
  reserve(nums , i + 1)
};

function reserve(arr, start){
  let end = arr.length - 1
  while( start < end){
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}
            // 1  5  8  5  1 3 4 6 7
let nums = [1, 5, 8, 4, 7, 6, 5, 3, 1];
nextPermutation(nums)
console.log(nums);
