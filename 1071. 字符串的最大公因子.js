/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// 判断两个字符串能否由同一个子串构成：str1 + str2 !== str2 + str1
// 如果两个字串都由同一个子串重复重复而来，那么两个串 1 拼 2 跟 2 拼 1 结果相同
// str1 + str2 = x * (m + n)
// str2 + str1 = x * (n + m)
var gcdOfStrings = function(str1, str2) {
    // 判断两个字符串能否由同一个子串构成
    if(str1 + str2 !== str2 + str1) return ""

    // 求两个整数 最大公因数: 欧几里得算法（辗转相除法）:gcd(a, b) = gcd(b, a % b)
    // 两个整数 a 和 b 的最大公因数，等于 b 和 a % b 的最大公因数。
    // 当 b 为 0 时，a 就是结果。
    function gcd(a,b){
      if( b !== 0){
      return  gcd(b, a % b)
      }else {
        return a
      }
    }
    // 计算字符串长度的最大公因数
    let len = gcd(str1.length, str2.length)
    return str1.slice(0,len)
};
console.log(gcdOfStrings('ABCABC','ABC'));
