/**
 * @param {string} s
 * @return {string}
 */
// 我们想找出：字符串中最长的回文子串。
// 比如对于 "babad"，它的子串有：
// 长度为1的："b", "a", "d" ...
// 长度为2的："ba", "ab", "ad" ...
// 长度为3的："bab", "aba" ...
// 我们要判断每个子串是不是回文,子串是由一对下标 i 和 j 来表示的
// 也就是说：子串 s[i...j] 是回文吗？
// 动态规划法： 我们用 dp[i][j] 表示"字符串从下标 i 到 j 的这一段子串是不是回文串"
// 这样我们就可以记录每个子串的情况，用之前算过的结果来帮助后面推断,
// 例如：字符串 "abcba"
// 如果我们有了 dp[1][3] = true，又知道 s[0] === s[4]，就能判断 "abcba" 是回文！
var longestPalindrome = function(s) {
    const n = s.length
    const dp = Array.from({length:n},() => Array(n).fill(false))
    if (n < 2) return s; // 单个字符一定是回文串
    // 记录最长回文串的起始位置
    let start = 0
    // 记录最长字串长度
    let maxlen = 1
    // 初始化：字串长度为1的都是回文
    for(let i = 0; i < n; i++){
      dp[i][i] = true
    }
    // 现在从长度为2的字串开始判断是不是回文字串
    for(let len = 2; len <= n; len++){ // 表示2到n长度的字串
      for(let i = 0; i <= n - len; i++){// i 是子串的起点下标
        let j = i + len -1  // 表示字串右端点

        // 状态方程：
        if( s[i] === s[j]){
          if(len === 2){  // 两个字符相等
            dp[i][j] = true
          } else {  
            dp[i][j] = dp[i + 1][j - 1]  // 则dp[i][j]状态等于里面的dp[i + 1][j - 1]状态
          }
        }else {
          dp[i][j] = false
        }
        // 如果字符串从下标 i 到 j 的这一段子串是回文串，且长度大于maxlen
        if(dp[i][j] && len > maxlen){
          maxlen = len
          start = i
        }
      }
    }
    return s.substring(start,start + maxlen)
};





















/**
 * @param {string} s
 * @return {string}
 */
// 中心扩展发法，以每个字符向两边扩展，看能扩展出多长的回文串。
// 奇数回文中心：一个字符为中心，比如 "aba" 以 b 为中心
// 偶数回文中心：两个字符之间为中心，比如 "abba" 以两个 b 中间为中心
// var longestPalindrome = function(s) {
//     if(s.length < 2) return s
//     // 维护最长字串
//     let star = 0,end = 0
//     // 创建函数判断回文串
//     const expandAroundCenter  = (left,right) => {
//       while(left >= 0 && right < s.length && s[left] === s[right]){
//         left--
//         right++
//       }
//       // left 和 right 会多扩展 一步，才跳出循环，所以，要退回一格，取真实的回文区间
//       return [left + 1,right - 1]
//     }
//     // 循环每个字符向两边扩展：
//     for(let i = 0; i < s.length; i++){
//       // 奇数回文
//       let [left1,right1] = expandAroundCenter(i,i)
//       // 偶数回文
//       let [left2,right2] = expandAroundCenter(i,i + 1)
//       //  维护最长回文字串
//       if(right1 - left1 > end - star){
//         star = left1
//         end = right1
//       }
//       if(right2 - left2 > end - star){
//         star = left2
//         end = right2
//       }
//     }
//     return s.substring(star,end + 1)

// };