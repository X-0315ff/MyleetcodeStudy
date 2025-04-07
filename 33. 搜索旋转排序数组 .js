/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分法
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while(left <= right){
    let mid = Math.floor((left + right)/2)

    if(nums[mid] === target) return mid

    // 判断那边是有序的
    if(nums[left] <= nums[mid]){              // 左边有序
        // 判断target是否在有序这边，即左边
      if(nums[left] <= target && target <nums[mid]){
        right = mid -1   // target在左边则缩小右边距
      } else {
        left = mid + 1   // target在右边则缩小左边距
      }
    } else {                                  // 右边有序
      // 判断target是否在有序这边，即右边
      if(nums[right] >= target && target > nums[mid]){
        left = mid + 1
      }else {
        right = mid - 1
      }
    }
  }
  return -1
};
nums = [4,5,6,7,0,1,2]
console.log(search(nums,3));
