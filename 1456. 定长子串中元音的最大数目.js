/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxU = 0 
    let pre =  0
    const arr = s.split('')
    const Uarr = new Set(['a','e','i','o','u'])
    for(let i = 0; i < arr.length; i++){
      if(Uarr.has(arr[i])){
        pre++
      }
      if(i < k - 1){
        continue
      }
      maxU = Math.max(pre,maxU)
      if(Uarr.has(arr[i - k + 1])){
        pre--
      }
    }
    return maxU
    
};
s = "aeiou", k = 2
console.log(maxVowels(s,k));
