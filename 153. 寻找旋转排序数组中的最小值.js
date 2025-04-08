/**
 * @param {number[]} nums
 * @return {number}
 */
// 二分法: 关键在于判断那边是有序的，因为数组原来是升序的，所以旋转后一定有一边是有序的
var findMin = function(nums) {
  let left = 0, right = nums.length - 1;
  let min = nums[0]
  while(left <= right){
    let mid = Math.floor((left + right)/2)

    if(nums[mid] === min) return min

    // 判断那边是有序的
    if(nums[left] <= nums[mid]){              // 左边有序
      if(nums[left] < min){
        min = nums[left]              // 更新最小值
        left = mid + 1
      } else {
        left = mid + 1   
      }         
    } else if(nums[mid] <= nums[right] ){                                  // 右边有序
      if(nums[right] < min){
        min = nums[mid]              // 更新最小值
        right = mid - 1
      }else {
        left = mid + 1
      }
     
    }
  }
  return min
};
nums = [4,5,6,7,0,1,2]
// findMin(nums)
console.log(findMin(nums));
