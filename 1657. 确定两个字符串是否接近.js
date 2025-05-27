/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

// 因为只用返回true 和 false ，所以重点在于判断的条件
// 显然，word1的长度必须等于word2才有可能接着判断
// 两个字符串要“接近”，必须满足两个条件：
// 1. 字符集相同，word1 中出现的字符，必须在 word2 中也出现，反之亦然。因为不能创造新字符，只能替换已有字符。
// 2. 字符出现频率组成相同，频率可以互相调换，所以只要频率数组排序后一样即可。例如：aabbcc 和 ddeeff → 频率是 [2,2,2]，可以通过频率交换得到。

var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false

    // 封装函数
    const countMap = (word) => {
      const map = new Map()
      for(let i of word){
        map.set(i,(map.get(i) || 0) + 1)
      }
      return map  
    }
    const wordMap2 = countMap(word2)
    const wordMap1 = countMap(word1)
    // 1. 判断字符集相同
    const key1 = [...wordMap1.keys()].sort().join('')
    const key2 = [...wordMap2.keys()].sort().join('')
    if(key1 !== key2) return false

    // 2. 在字符集相同的条件下，判断字符出现频率是否一样，顺序不重要
    const values1 = [...wordMap1.values()].sort((a,b) => a - b)
    const values2 = [...wordMap2.values()].sort((a,b) => a - b)
    for(let i = 0; i < values1.length; i++){
      if(values1[i] !== values2[i]) return false
    }

    return true
};