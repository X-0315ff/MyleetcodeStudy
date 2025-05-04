/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const chars = s.split(''); // 转为可变数组
  const indexArr = [];

  for (let i = 0; i < chars.length; i++) {
    if (vowels.has(chars[i])) {
      indexArr.push(i);
    }
  }

  let left = 0, right = indexArr.length - 1;
  while (left < right) {
    [chars[indexArr[left]], chars[indexArr[right]]] = 
    [chars[indexArr[right]], chars[indexArr[left]]];
    left++;
    right--;
  }

  return chars.join('');
};
s = "IceCreAm"
console.log(reverseVowels(s));
