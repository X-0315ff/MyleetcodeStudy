/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = [], max = 0
    for(let i = 0; i < s.length; i++) {
      // 查找当前元素在arr数组中首次出现的下标，如果没有，则值为-1
        let index = arr.indexOf(s[i])
        if(index !== -1) {
            max = Math.max(arr.length, max) 
            // 删除重复的元素： 删除数组中重复元素及重复元素之前的所有元素
            arr.splice(0, index+1);
        }
        arr.push(s[i]);
    }
    max = Math.max(arr.length, max) 
    return max
};
s= "abcabcbb"
console.log(lengthOfLongestSubstring(s))