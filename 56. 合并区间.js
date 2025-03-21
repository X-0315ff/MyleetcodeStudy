/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const res = []
    // 关键：排序，按左边界排序
    intervals.sort((a,b)=>a[0]-b[0])
    res.push(intervals[0])
    for (let i = 0; i < intervals.length - 1 ; i++) {
      if(res[res.length - 1][1] >= intervals[i+1][0]){
        let  left = Math.min(res[res.length-1][0],intervals[i+1][0])
        let  right = Math.max(res[res.length-1][1],intervals[i+1][1])
        res[res.length - 1] = [left,right]
      }else{
        res.push(intervals[i+1])
      }
    }
    return res
};
intervals = [[1,4],[0,4]]
console.log(merge(intervals));
