/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, right = 0
    let zero = 0
    let maxLen = 0
    while(right < nums.length){
      if(nums[right] === 0){
        zero++
      }
      while(zero > 1){
        if(nums[left] === 0){
          zero--
        }
        left++
      }
      if(right - left > maxLen){
        maxLen = right - left
      }
      right++
    }
    return maxLen
};
nums = [0,1,1,1,0,1,1,0,1]