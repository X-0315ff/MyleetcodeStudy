/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0,right = 0
    let maxLen = 0
    let zero = 0
    while(right < nums.length){
      if(nums[right] === 0){
        zero++
      }
      while(zero > k){
        if(nums[left] === 0){
          zero--
        }
        left++
      }
      right++
      if( right - left > maxLen){
        maxLen = right - left
      }
    } 
    return maxLen
};
nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
longestOnes(nums, k)