/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    //  统计出现次数
    const map = new Map()
    for(let i of arr){
      map.set(i,(map.get(i) || 0) + 1)
    }
    // 出现次数放入set中，如果有重复则长度不相等
    const pre = [...map.values()]
    const set = new Set(pre)
    console.log(set.size,pre.length);
    
    return set.size === pre.length
};
arr = [1,2,2,1,1,3]
console.log(uniqueOccurrences(arr));
