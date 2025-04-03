/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = []
    let path = []
    const map = {  // 数字到字母的映射
      "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
      "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    };
    // 如果为空，返回空数组
    if(!digits.length){ return [] }
    // index 代表当前处理的数字在 digits 字符串中的索引位置0,1,2...
    function backtrack(index){
      if( index === digits.length ){
        console.log(path.join(""));
        res.push(path.join(""))
        
        return 
      }
      
      for(let i of map[digits[index]]){
        path.push(i)
        backtrack(index+1)
        path.pop()

      }
    }
    backtrack(0)
    // console.log(res);
    
    return res 
};
letterCombinations('23')
 let path = [ 'a', 'd' ]
//  console.log( path.join(''));
 