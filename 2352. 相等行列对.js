/**
 * @param {number[][]} grid
 * @return {number}
 */
[ [3,1,2,2],
  [1,4,4,5],
  [2,4,2,2],
  [2,4,2,2]]

var equalPairs = function(grid) {
  const rowMap = new Map()
    // 1. 把每一行变成一个字符串 key，统计出现次数
      for(let row of grid){
        const key = row.join(',')
        rowMap.set(key,(rowMap.get(row) || 0) + 1)
      }
      let count = 0
    // 2. 遍历每一列，也拼成 key，看看有多少和某行相等
      for(let i = 0; i < grid.length; i++){
        const col = []
        for(let j = 0; j < grid.length; j++){
          col.push(grid[j][i])
        }
        const key = col.join(',')
        if(rowMap.has(key)){
          count += rowMap.get(key)
        }
      }

      return count

};
grid = [[3,2,1],[1,7,6],[2,7,7]]
console.log(equalPairs(grid));
