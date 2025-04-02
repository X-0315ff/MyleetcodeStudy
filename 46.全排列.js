/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // 储存结果
  let res = []
  // 储存当前路径
  let path = []
  // 给数字创建标记数组,默认都没使用过false
  let used = new Array(nums.length).fill(false)

  function backtrack(){
      if(path.length === nums.length){
          res.push([...path])
          console.log(path);
          return 
      }
      for(let i=0;i<nums.length;i++){
          // 判断数字是否可用
          if(used[i]) continue
          // 未用就添加数字到路径中,并标记数字为已用true
          path.push(nums[i])
          used[i] = true
          // 递归
          backtrack()
          // 回溯：把当前数字踢处路径，并标记数字为未用false
          path.pop()
          used[i] = false
      }
  }
  backtrack()
  return res
};
nums = [1,2,3]
console.log(permute(nums));
