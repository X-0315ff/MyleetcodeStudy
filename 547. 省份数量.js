/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length
    const visted = new Array(n).fill(false)
    let count = 0

    // 深度优先搜索：从城市 i 出发，把所有能连接到的城市都标记为访问过
    function dfs(i){
      for(let j = 0; j < n; j++){
        if(isConnected[i][j] === 1 && !visted[j]){
          visted[j] = true
          dfs(j)
        }
      }
    }
    // 遍历所有城市
    for(let i = 0; i < n; i++){
      if(!visted[i]){
        dfs(i)
        count++
      }
    }

    return count
};