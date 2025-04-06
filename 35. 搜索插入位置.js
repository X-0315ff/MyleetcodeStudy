/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0
    for( i = 0; i < nums.length; i++){
      if(target <= nums[i]){
        return i
      }
      // if(target < nums[i]){
      //   return i
      // }
    }
    return i
};
nums = [1,3,5,6]
target = 5
console.log(searchInsert(nums,target));
