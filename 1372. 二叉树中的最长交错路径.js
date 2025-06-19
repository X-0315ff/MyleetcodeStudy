/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let maxlen = 0
    function dfs(node, isleft, len){
      if(!node) return

      maxlen = Math.max(maxlen, len)
      if(isleft){
         // 当前是从左边来   
        dfs(node.right, false, len + 1) // 如果下一个向右则路径 + 1
        dfs(node.left, true, 1) // 如果当前路径下一个方向也向左，只能重新起一条新路径。
      }else {
         // 当前是从右边来
        dfs(node.left, true, len + 1) // 同上
        dfs(node.right, false, 1) // 同上
      }
    }

    dfs(root.left, true, 1)
    dfs(root.right, false, 1)
    return maxlen
};