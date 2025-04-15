/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 0            1
// 1          1   1
// 2        1   2   1
// 3      1   3   3   1
// 4    1   4   6    4   1
// 5  1   5  10   10   5   1
var generate = function(numRows) {
    const result = []
    for(let i = 0;i < numRows; i++){
      // 保存每一行的结果arr
      let arr = new Array(i+1).fill(1)
      if(i < 2){
        result.push(arr)
        continue
      }
      for(let j = 0; j < arr.length; j++){
        if(j === 0 || j === arr.length -1) continue
        // 每个值等于前一行的当前值的左右两肩之和
        arr[j] =  result[i-1][j-1] + result[i-1][j]
      }
      // 把每一行添加进结果数组中
      result.push(arr)
    }
    // for( i of result){
    //   console.log(i);
    // }
    return result
};
generate(5)
