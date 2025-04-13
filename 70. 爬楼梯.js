/**
 * @param {number} n
 * @return {number}
 */
// 直接递归 return  n-1 + n-2，复杂度为2的N次方，会超时
// 所以使用动态规划 
var climbStairs = function(n) {
   if(n < 2) return n
   let first = 1
   let second = 2
   for(let i = 3; i <= n; i++){
    let current = first + second
    first = second 
    second = current
   }
  return second
};
