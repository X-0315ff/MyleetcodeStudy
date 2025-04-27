/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 思路：中位数就是整个「有序」数列最中间的数，把两个数组分别划分成左边和右边，
// 如：A左，A右，B左，B右，其中令A左 + A右数 等于总数的一半（如果是奇数则一半 + 1），A右 + B右等于另一半
// 这样只如果划分拿出来的左边的最大值小于右边的最小值，则左边最大值就是中位数
// 而如何划分呢：在较短数组上进行二分查找，这样的时间复杂度最低
var findMedianSortedArrays = function(nums1, nums2) {
    // 确保nums1是短数组
    if(nums1.length > nums2.length){
      return findMedianSortedArrays(nums2,nums1)
    }

    const m = nums1.length
    const n = nums2.length
    let left = 0,right = m
    const halfLen = Math.floor((m + n + 1)/2)
    
    while(left <= right){ // left 和 right 是在 nums1 数组上执行二分查找时的两个边界。
      // i 表示的是nums1分割线的位置
      const i = Math.floor((left + right) / 2)
      // j 表示的是nums2分割线的位置
      const j = halfLen - i

      // Aleft 表示nums1左边最大值，nums1左边有元素，则nums1左边最大值为nums1[i - 1]，否则为-Infinity
      // 其他，同上
      const Aleft = (i === 0) ? -Infinity : nums1[i - 1]
      const Aright = (i === m) ? Infinity : nums1[i]
      const Bleft = (j === 0) ? -Infinity : nums2[j - 1]
      const Bright = (j === n) ? Infinity : nums2[j]
      
      //找到合适的划分
      if(Aleft <= Bright && Bleft <= Aright){
        // 如果是偶数
        if((m + n)% 2 === 0){
          return (Math.max(Aleft , Bleft) + Math.min(Aright,Bright)) / 2
        }else {
        // 如果是奇数
        return Math.max(Aleft , Bleft)
        }
      }

      // 如果Aleft > Bright,说明分割时 i 太大，那么正确的 i 一定在 [left, i-1] 这个范围里！
      if(Aleft > Bright){
        right = i - 1
      }else {
       left = i + 1 
      }
    }   
};