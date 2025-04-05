/**
 * @param {number} n
 * @return {string[]}
 */

// 只有 left < n 时才可以放 (。
// 只有 right < left 时才可以放 )，否则括号会不合法。
var generateParenthesis = function(n) {
    let res = []

    function backtrack(path,left,right){
      if(path.length === 2*n){
        res.push(path.join(''))
        return 
      }
      if(left < n){ // 只要 `(` 没  放满，就可以放 `(`
        // 传递path参数时使用这样的浅拷贝，那每次的path都是独立的，不会影响回溯，所以都不需要pop
        backtrack([...path,'('],left+1,right)
      }

      if(right < left){
        backtrack([...path,')'],left,right+1)
      }
      
    }
    backtrack([],0,0)
    console.log(res);
    
    return res
    

};

generateParenthesis(3)
// console.log(typeof str.splice('').join(''));
