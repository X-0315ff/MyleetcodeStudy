/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：双循环，不停的找最后一个位置，直到找到数组开头

var jump = function(nums) {
    // 需要抵达的位置，初始为数组末尾
    let position = nums.length - 1
    let steps = 0
    while(position > 0){
      for(let i = 0; i < position; i++){
        if(i + nums[i] > position){
          position = i
          steps++
          break
        }
      }
    }
    return steps
};
//         0,1,2,3,4
// nums = [2,3,1,1,4]