/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 查找目标值第一次出现的位置（最左边）
  function findFirst(nums, target) {
      let left = 0;
      let right = nums.length - 1;
      let first = -1; // 记录第一次出现的位置
      // 之所以<= ,我们要确保中间值 mid 能够覆盖所有位置，包括最后剩下的一个元素！
      while (left <= right) {
          let mid = Math.floor((left + right) / 2); // 计算中间位置
          if (nums[mid] >= target) {
              // 即使找到了 target，也继续向左找
              right = mid - 1;
          } else {
              // 中间值比目标小，向右查找
              left = mid + 1;
          }
          if (nums[mid] === target) {
              // 记录当前位置为可能的起始位置
              first = mid;
          }
      }

      return first; // 返回第一次出现的位置
  }

  // 查找目标值最后一次出现的位置（最右边）
  function findLast(nums, target) {
      let left = 0;
      let right = nums.length - 1;
      let last = -1; // 记录最后一次出现的位置

      while (left <= right) {
          let mid = Math.floor((left + right) / 2); // 计算中间位置

          if (nums[mid] <= target) {
              // 即使找到了 target，也继续向右找
              left = mid + 1;
          } else {
              // 中间值比目标大，向左查找
              right = mid - 1;
          }

          if (nums[mid] === target) {
              // 记录当前位置为可能的结束位置
              last = mid;
          }
      }

      return last; // 返回最后一次出现的位置
  }

  // 返回目标值的起始和结束位置
  return [findFirst(nums, target), findLast(nums, target)];
};
nums = [5,7,7,8,8,10]
console.log(searchRange(nums,8));
