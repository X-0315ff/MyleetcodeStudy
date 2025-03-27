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
// 二叉树的最长直径:  某节点左子树最大深度 + 某节点右子树最大深度
// 注意：不一定非是经过根节点，也不一定是根节点的左节点或右节点！！！
// 递归法：

var diameterOfBinaryTree = function(root) {
    let max = 0;
// 求某节点的左右子树最大深度
    const deepth = (node) => {
      if(node === null) return 0
      let left = deepth(node.left)
      let right = deepth(node.right)
      max = Math.max(max, left + right)
      return Math.max(left, right) + 1
    }
    deepth(root)
    return max
};