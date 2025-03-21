/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let p = 0
    for(let i=0; i<nums.length; i++){
      if(nums[i]===0){
        nums.splice(i,1)
        nums.push(0)
        i--
        p++
        if(i+p === nums.length){
          break
        }
      }
    }
    // console.log(nums);   
};
nums = [0,1,0,3,12]
moveZeroes(nums)
