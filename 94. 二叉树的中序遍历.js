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
 * @return {number[]}
 */
// 中序遍历 ： 左-根-右
var inorderTraversal = function(root) {
    let res = []
    if(!root) return res

      res = res.concat(inorderTraversal(root.left))

      res.push(root.val)

      res = res.concat(inorderTraversal(root.right))

    return res
};