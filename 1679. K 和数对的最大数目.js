/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 使用哈希表：哈希表存储 k - num 值及次数
var maxOperations = function(nums, k) {
  const map = new Map()
  let res = 0
  for(let num of nums){
    const pre = k - num
    // 检查表中是否存在符合的数对
    if( map.has(pre) && map.get(pre) > 0){
      res++
      // 找到了，该数次数 - 1
      map.set(pre,map.get(pre) - 1)
    }else {
      // 没找到就把该数加入哈希表
      map.set(num,(map.get(num) || 0) + 1)
    }
  }
  console.log(res);
  
  return res
    
};
nums = [1], k = 1
maxOperations(nums,k)