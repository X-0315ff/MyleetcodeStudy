/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 每次都从 0 开始遍历，导致同一个元素可能在不同位置重复选择。
// 想要不重复的子集，关键在于调整遍历的起始位置

var subsets = function(nums) {
  // 储存结果
    let res = []
    // 储存当前路径
    let path = []

    // 不需要标记数字，因为会导致重复选择，最终导致有重复子集，如132与123算重复子集
    // let used = new Array(nums.length).fill(false)

    function backtrack(index){
      res.push([...path])
      for(let i=index;i<nums.length;i++){
        path.push(nums[i])
        backtrack(i+1)
        path.pop()
      }
    }
    backtrack(0)
    return res
};
// var subsets = function(nums) {
//   // 储存结果
//     let res = []
//     // 储存当前路径
//     let path = []
//     // 给数字创建标记数组,默认都没使用过false
//     let used = new Array(nums.length).fill(false)
//     function backtrack(){
//       res.push([...path])
//       for(let i=0;i<nums.length;i++){
//         if(used[i]) continue
//         path.push(nums[i])
//         used[i] = true
//         backtrack()
//         path.pop()
//         used[i] = false
//       }
//     }
//     backtrack()
//     return res
// };
// 结果是：有重复子集
// [
//   [],          [ 1 ],
//   [ 1, 2 ],    [ 1, 2, 3 ],
//   [ 1, 3 ],    [ 1, 3, 2 ],
//   [ 2 ],       [ 2, 1 ],
//   [ 2, 1, 3 ], [ 2, 3 ],
//   [ 2, 3, 1 ], [ 3 ],
//   [ 3, 1 ],    [ 3, 1, 2 ],
//   [ 3, 2 ],    [ 3, 2, 1 ]
// ]
nums=[1,2,3]
console.log(subsets(nums));
