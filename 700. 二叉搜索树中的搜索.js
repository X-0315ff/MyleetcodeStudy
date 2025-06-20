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
 * @param {number} val
 * @return {TreeNode}
 */
//利用 BST 的特性来剪枝优化:
// 左子树所有节点值 < 当前节点值
// 右子树所有节点值 > 当前节点值
var searchBST = function(root, val) {
    if(!root) return
    if(root.val === val){
      return root
    }
    
    if(val < root.val){
     return  searchBST(root.left, val)
    }else {
     return  searchBST(root.right,val)
    }
    // 普通二叉树的遍历方式（DFS）：
    // return searchBST(root.left, val) || searchBST(root.right,val)
};