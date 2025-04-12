/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    for(let i of nums){
      map.set(i,(map.get(i) || 0) + 1)
      // if(map.has(i)){
      //   map.set(i,map.get(i) + 1)
      // }else {
      //   map.set(i,1)
      // }
    }
    // 转成 [num, count] 的数组
    const entrieArr = Array.from(map.entries())

    return entrieArr.sort((a,b)=>{
    // 按 count 降序排序
    return  b[1] - a[1]
    })
    // 取前k个
    .slice(0,k)
    // 只返回数字
    .map((entrie)=>{
    return  entrie[0]
    })
};