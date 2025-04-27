/**
 * @param {number} n
 * @return {string[][]}
 */
// 回溯 + 冲突检测
// 一行行尝试放置皇后，直到放完第 n 行，则得到一种合法解
// 同列冲突：用一个数组 cols 记录哪些列已经被占用。
// 主对角线冲突（row - col 相同）：用 diag1 记录
// 次对角线冲突（row + col 相同）：用 diag2 记录。
var solveNQueens = function(n) {
    const res = []
    // 存放当前摆放方案的字符串数组
    const path = []

    // 创建数组记录列、主对角线、次对角线的占用情况
    const cols = new Set()
    const diag1 = new Set()
    const diag2 = new Set()

    function dfs(row){
      // 当前走到最后一行了，找到一个完整解
      if(row === n){
        res.push([...path])
        return
      }

      for(let col = 0; col < n; col ++){
        // 主对角线
        const d1 = row - col
        // 次对角线
        const d2 = row + col

        // 冲突检测：列 / 主对角线 / 副对角线
        if(cols.has(col) || diag1.has(d1) || diag2.has(d2)){
          continue
        }

        cols.add(col)
        diag1.add(d1)
        diag2.add(d2)

       // 构建当前行的字符串，放置 'Q'
       const rowPre = '.'.repeat(col) + 'Q' + '.'.repeat( n - col - 1)
       path.push(rowPre)

       // 递归下一行
       dfs(row + 1)

       // 回溯
       path.pop()
       cols.delete(col)
       diag1.delete(d1)
       diag2.delete(d2)
      }
    }

    dfs(0)

    return res
};

console.log(solveNQueens(4));
