/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用异或（XOR）法，异或法有‘三大魔法‘ ：
// 一个数跟自己异或，结果永远是 0：a ^ a = 0
// 一个数跟 0 异或，不变 ：a ^ 0 = a
// 满足交换律和结合律 ： 所以 (a ^ b ^ c) 的顺序可以随便变
var singleNumber = function(nums) {
    let result = 0
    // 把所有数进行异或，最后只剩一个孤独的数
    // 如：1 ^ 2 ^ 2 ^ 3 ^ 1 相当于 (1 ^ 1) ^ (2 ^ 2) ^ 3 即 0 ^ 0 ^ 3 = 3
    for(let i of nums){
      result ^= i
    }
    return result
};




/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用了哈希算法，使用了额外的O（n）空间
// var singleNumber = function(nums) {
//     if(nums.length < 2) return nums[0]
//     const map = new Map()
//     for(let i of nums){
//       map.set(i,(map.get(i) || 0 ) + 1)
//     }
//     for (let [key, value] of map) {
//       if (value === 1) return key;
//   }
// };

