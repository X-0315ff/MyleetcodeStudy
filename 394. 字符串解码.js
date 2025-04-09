/**
 * @param {string} s
 * @return {string}
 */
// 先从内解码，一层一层往外拼接
var decodeString = function(s) {
    const numStack = [] // 数字栈：保存每一层的重复次数
    const strStack = [] // 字符串栈：保存每一层之前的字符串
    let curStr = ''     // 当前正在构建的字符串
    let num = 0         // 当前读取的数字

    for(let char of s){
      // 判断是否是数字
      if(char >= '0' && char <= '9'){
        // 注意可能含多位
        num = num * 10 + Number(char)
      }else if(char >= 'a' && char <= 'z'){
        curStr = curStr + char
      }else if(char === '['){   // 遇到 '['：进入新一层嵌套，保存状态
        numStack.push(num)
        strStack.push(curStr)
        curStr = ''
        num = 0
      }else if(char === ']'){   // 遇到 ']'：当前层结束，开始解码并回到上一层
        curStr = strStack.pop() + curStr.repeat(numStack.pop())
      }
    }
    return curStr
};
s = "3[a10[bc]]"
console.log(decodeString(s));



