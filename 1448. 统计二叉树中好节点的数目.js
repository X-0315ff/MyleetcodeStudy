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
var goodNodes = function(root) {
    
  let count = 0
  function dfs(node, goodCount){
    if(!node) return
    // 遇到好节点
    if(node.val >= goodCount){
      count++
    }
    // 更新路径上的最大值
    let newMax = Math.max(goodCount, node.val)
    dfs(node.left,newMax)
    dfs(node.right,newMax)
  }
  dfs(root, root.val)
  return count
};