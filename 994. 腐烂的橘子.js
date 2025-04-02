/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length
    const n = grid[0].length 
    let fresh = 0
    const q = []
    for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
        // 统计新鲜橘子
        if(grid[i][j] === 1){
          fresh++
        }
        // 初始化腐烂橘子队列
        if(grid[i][j] === 2){
          q.push([i,j])
        }
      }
    }

    // 循环遍历烂橘子队列
    // 如果烂橘子队列等于0退出循环，则说明多循环一轮，即结果多1，所以要加上fresh
    let time = 0
    while(fresh && q.length){
      time++
      // 把每分钟的烂橘子给temp，然后清空q
      let temp = q
      q = []
      // 遍历烂橘子队列
      for(let [x,y] of temp){
        // 遍历烂橘子四个方向
        for(let [i,j] of [[x,y+1],[x,y-1],[x+1,y],[x-1,y]]){
          if(i>=0 && i<m && j>=0 && j<m && grid[i][j] === 1){
            grid[i][j] = 2
            fresh--
            q.push([i,j])
          }
        }
      }
    }
};