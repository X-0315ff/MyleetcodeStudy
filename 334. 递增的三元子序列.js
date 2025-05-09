/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity
    let second = Infinity
    for( let i of nums){
      if(i < first){
        first = i  // 找最小的
      }else if(i < second){
        second = i // 找第二小的
      }else {
        return true // 找到了第三个比 first 和 second 都大的数
      }
    }
    return false
};
nums = [1,1,1,1,1,1,1]
console.log(increasingTriplet(nums));
