/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const arr = []
    nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length-1; i++){
      let left = i+1
      let right = nums.length-1
      if(nums[i] *  nums[right] > 0) return arr
      while(left < right){
        if(nums[i] + nums[left] + nums[right] === 0){
          arr.push([nums[i],nums[left],nums[right]])
          // 跳过重复的 nums[left] 和 nums[right]
          while(left < right && nums[left] === nums[left+1]) left++
          while(left < right && nums[right] === nums[right-1]) right--
          left++
          right--
        }else if(nums[i] + nums[left] + nums[right] > 0){
          right--
        }else{
          left++
        }
      }
      // 跳过重复的 nums[i]
      while(i < nums.length-1 && nums[i] === nums[i+1]) i++
    }
    return arr
}
    
nums = [-2,0,1,1,2]
console.log(threeSum(nums));