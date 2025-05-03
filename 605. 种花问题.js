/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // 简化逻辑判断，在数组的开头和末尾各插入一个 0
  flowerbed.unshift(0);
  flowerbed.push(0);
  for (let i = 1; i < flowerbed.length - 1; i++) {
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
          flowerbed[i] = 1; // 种花！
          n--;
      }
  }
  return n <= 0;
};