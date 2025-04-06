/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length
    const n = board[0].length
    let found = false
    function dfs(i,j ,index){
      if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]){
        return false
      }
      if (index === word.length - 1) return true;

      let tem = board[i][j]
      board[i][j] = '#'
      let  res =  dfs(i,j+1,index + 1) ||
                  dfs(i,j-1,index + 1) ||
                  dfs(i+1,j,index + 1) ||
                  dfs(i-1,j,index + 1)

      // 回溯
      board[i][j] = tem
      return res
      }
      
    
    // console.log(word.charAt(0));
    outer: // 标签名，后面用于 break outer
    for(let i = 0;i < m; i++){
      for(let j = 0; j < n ; j++){
        if(board[i][j] === word.charAt(0)){
         found = dfs(i,j,0)
         if(found) break outer // 找到完整路径后直接跳出两层循环
        }   
      }
    }
    return found
};
board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
]
word = "ABCCED"
exist(board,word)
