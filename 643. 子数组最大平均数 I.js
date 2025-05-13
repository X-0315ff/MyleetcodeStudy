/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 定长滑动窗口
var findMaxAverage = function(nums, k) {
    //窗口元素和的最大值
    let winMax = -Infinity
    // 当前窗口元素和
    let s = 0

    for(let i = 0; i< nums.length; i++){
      s += nums[i]
      
      if(i < k - 1){
        continue
      }
      winMax = Math.max(winMax,s)

      s -= nums[i - k + 1]
    }

    return winMax/k
};

nums = [-1,-12,5,6,50,3], k = 2
console.log(findMaxAverage(nums,k));
