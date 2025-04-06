/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = []
    let path = []

    // 判断是否为回文串
    function isPalindrome(str){
      let l = 0
      let r = str.length - 1
      while(l < r){
        if(str[l] !== str[r]) return false
        l++
        r-- 
      }
      return true
    }

    function backtrack(stratIndex){
      // 如果切到了字符串末尾，说明找到一组可行方案
      if(stratIndex === s.length){
        res.push([...path]);
        return
      }

      for(let i = stratIndex; i < s.length; i++){
        // 截取当前子串 s[startIndex..i]
        let substr = s.substring(stratIndex,i+1)
         // 只有是回文串才能继续向下递归
        if(isPalindrome(substr)){
          path.push(substr)
          backtrack(i+1)
          path.pop()
        }
      }
    }

    backtrack(0)
    return res
};
s = "aab"
console.log(partition(s));
