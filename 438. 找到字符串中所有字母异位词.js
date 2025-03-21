/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let sLen = s.length;
  let pLen = p.length;
  if (sLen < pLen) return []; // 如果 s 长度小于 p，不可能有异位词，直接返回空数组

  let res = []; // 存储结果
  let sArr = new Array(26).fill(0); // 统计 s 窗口中每个字母的个数
  let pArr = new Array(26).fill(0); // 统计 p 中每个字母的个数

  // **初始化滑动窗口 (前 pLen 个字符)**
  for (let i = 0; i < pLen; i++) {
      sArr[s[i].charCodeAt() - 'a'.charCodeAt()]++; // 统计 s 的前 pLen 个字符
      pArr[p[i].charCodeAt() - 'a'.charCodeAt()]++; // 统计 p 中所有字符
  }

  // **检查初始窗口是否匹配**
  if (sArr.toString() === pArr.toString()) {
      res.push(0); // 如果 p 和 s 前 pLen 个字符相同，记录索引 0
  }

  // **滑动窗口遍历 s**
  for (let i = 0; i < sLen - pLen; i++) {
      // **窗口左端右移一个字符**，移除窗口左端的字符
      sArr[s[i].charCodeAt() - 'a'.charCodeAt()]--;
      
      // **窗口右端右移一个字符**，加入新的字符
      sArr[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]++;

      // **检查当前窗口是否匹配**
      if (sArr.toString() === pArr.toString()) {
          res.push(i + 1); // 记录窗口起始索引
      }
  }

  return res; // 返回所有异位词的起始索引
};


s = "cbaebabacd"
p = "abc"
findAnagrams(s,p)