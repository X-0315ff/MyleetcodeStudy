/**
 * @param {string} s
 * @return {string}
 */
// 栈
var removeStars = function(s) {
    const p = []
    for(let i of s){
      if(i !== '*'){
        p.push(i)
      }else {
          p.pop()
      }
    }
    return p.join('')
};  
s = "le******"
console.log(removeStars(s));
