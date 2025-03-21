/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 左右前缀法
var productExceptSelf = function(nums) {
    let n = nums.length
    let left = new Array(n)
    // 因为第一个元素前面没有数，所以左边前缀累计乘积为1
    left[0] = 1
    // 同理右边前缀累计乘积为1
    let right = 1
    // 元素左边前缀累计乘积
    for(let i = 1;i < n;i++){
        left[i] = left[i-1] * nums[i-1]
    }
    // 元素右边前缀累计乘积 与 左边前缀乘积相乘
    for(let i = n -1;i >= 0;i--){
      left[i] = left[i] * right
      right = right * nums[i]
    }
    return left
};
nums = [1,2,3,4]
console.log(productExceptSelf(nums));