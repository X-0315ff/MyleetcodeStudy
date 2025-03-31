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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0;
     // 从当前节点出发的路径数量
    function countPaths(root, targetSum) {
      if(!root) return 0
      let count = 0 
      if(root.val === targetSum) count = 1
      // 继续递归左右子树
      count += countPaths(root.left, targetSum - root.val)
      count += countPaths(root.right, targetSum - root.val)
      return count
    }
     // 计算当前节点和左右子树的路径数量
    const res = countPaths(root,targetSum)
                + pathSum(root.left, targetSum)
                + pathSum(root.right, targetSum)
    return res
};