/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
  // 去除首尾空格
  s.trim()
  // 按空格分割字符串
  const words = s.split(' ')
  // console.log(words);
  // 过滤掉空字符串（处理多个空格）
  const filterwords = words.filter( word => word.length > 0)
  // console.log(filterwords);
  // 反转数组
  const reversefilterwords = filterwords.reverse()
  // 用空格连接成字符串
  return reversefilterwords.join(' ')
};
s = " a good   example "
reverseWords(s)