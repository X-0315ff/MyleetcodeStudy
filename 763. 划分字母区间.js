/**
 * @param {string} s
 * @return {number[]}
 */
// 记录每个字母最后一次出现的位置
var partitionLabels = function(s) {
  const lastIndexMap = {};
  const result = [];

  // 1. 记录每个字母最后一次出现的位置
//   a: 8,
//   b: 5,
//   c: 7,
//   d: 14,
//   e: 15,
//   f: 11,
//   g: 13,
//   h: 19,
//   i: 22,
//   j: 23,
//   k: 20,
//   l: 21
// }
  for (let i = 0; i < s.length; i++) {
    lastIndexMap[s[i]] = i;
  }
  let start = 0
  let end = 0
  for(let i = 0; i < s.length; i++){
    end = Math.max(end,lastIndexMap[s[i]])
    // 找到分区
    if(i === end){
      result.push(end - start + 1) // 加入分区长度
      start = i + 1 // 开始新的分区
    }
  }
  return result
    
};
s = "ababcbacadefegdehijhklij"
console.log(partitionLabels(s));
