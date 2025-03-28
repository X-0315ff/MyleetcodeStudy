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
 * @return {boolean}
 */
// 使用上下限递归，因为需要比较当前节点的值和整个左右子树所有节点的，所以得定一个上下限
// 而不能简单的判断左右子节点

var isValidBST = function(root) {
  const dfs = (root,min,max) => {
    if(!root) return true 
    let val = root.val
    if(val <= min || val >= max) return false
    // 递归检查左右子树，更行上下限
    return dfs(root.left,min,val) && dfs(root.right,val,max)
  }
  return dfs(root,-Infinity, Infinity)
};