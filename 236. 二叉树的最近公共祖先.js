/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 当递归到叶子节点或找到目标节点时，返回当前节点。
    // 返回当前节点，回溯时进行合并。
    if(root === null || root === p || root === q) return root

    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)
    // 左右子树都找到目标节点,当前节点是最近公共祖先
    if( left && right){
      return root
    }
    // 如果只有一侧找到，返回非空一侧
    return left || right
};