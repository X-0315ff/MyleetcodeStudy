/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const st = []
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  // console.log(map['(']);
  
  for(let i of s){
    if(map[i]){ // 如果是左括号就压栈,
      st.push(map[i]) // 压栈的是右括号
    }else if(st.length === 0 || st.pop() !== i){ //
      return false
    }
  }
  if(st.length === 0){
    return true
  };
}
s = "()[]{}"
isValid(s)