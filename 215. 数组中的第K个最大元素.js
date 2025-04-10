/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // const arr = [...new Set(nums)]
  const arr =  [...nums]
  arr.sort((a,b)=>{
      return b - a
    })
    console.log(arr);
    return arr[k-1]
    
};
nums = [3,2,3,1,2,4,5,5,6]
k = 4
console.log(findKthLargest(nums,k));

