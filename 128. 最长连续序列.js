/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let p = 0
    let max = 0
    const arr = [...set].sort((a, b) => a - b)
    console.log(arr+'--------');
    if (arr.length === 0) return 0
    if (arr.length === 1) return 1
    for( let i = 0; i < arr.length; i++){
      if(arr[i] + 1 === arr[i + 1]){
          p++
      }else if( p >= arr.length/2){
            console.log('max=p='+p);
            return p
        }else if(p >= max){
              max = p
              p = 1
          }else {
              p = 1
          }
    }  
    console.log(max);
    return max
    
    
    
};
nums = [7,-9,3,-6,3,5,3,6,-2,-5,8,6,-4,-6,-4,-4,5,-9,2,7,0,0]
longestConsecutive(nums)
