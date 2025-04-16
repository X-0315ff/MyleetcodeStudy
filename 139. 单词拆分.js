/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 创建一个长度比s多一的数组dp，表示s从索引0开始到末尾结束，某些位置能否被拆分（即是否在word中）。
// 如果dp末尾是true，则说明s能够被word中的单词拆分！

var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    // 初始化，dp[0]表示空字符串，空字符串不需要拆分，默认拆成功了
    dp[0] = true
    for(let i = 1; i < s.length; i++){
      for(let j = 0; j < i; j++){
        if(dp[i] && wordDict.includes(s.substring(j,i))){
          d[i] = true
          break
        }
      }
    }
    return dp[s.length]
};