/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need = new Map() // 目标字符及其所需次数
    const window = new Map()  // 当前窗口内的字符计数
    // 统计t中每个字符的频率
    for(let c of t){
      need.set(c,(need.get(c) || 0) + 1)
    }

    let left = 0,right = 0
    let valid = 0  // 符合条件的字符数
    let start = 0, len = Infinity // 最小字串的起始位置和长度

    while(right < s.length){
      let c = s[right]
      right++ // 扩大窗口

      // 如果是需要的字符，更新窗口计数
      if( need.has(c)){
        window.set(c,(window.get(c) || 0)  + 1)
        if(window.get(c) === need.get(c)){
          valid++
        }
      }
      
      // 当窗口内字符数量已满足所有需要，开始收缩窗口
      while( valid === need.size){
        // 更新最短字串
        if( right - left < len ){
          start = left 
          len = right - left
        }
  
        let d = s[left]
        left++ // 缩小窗口
  
        // 如果被移出的字符是需要的字符，更新计数
        if(need.has(d)){
          if(window.get(d) === need.get(d)){
            valid--
          }
          window.set(d,window.get(d) - 1)
        }
      }
    }


    return len === Infinity ? "" : s.substring(start, start + len)
};