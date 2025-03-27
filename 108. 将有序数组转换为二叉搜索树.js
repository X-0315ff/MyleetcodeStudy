/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 因为数组是升序排列的，所以中值就是根节点，中值左部分是左子树，右部分是右子树
[-10, -3, 0, 5, 9];
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null
    let mid = Math.floor(nums.length/2) // 中间元素索引
    let root = new TreeNode(nums[mid]) // 以中间元素创建根节点
    // 能用中值左部分是左子树，右部分是右子树的关键在于数组是升序排列
    root.left = sortedArrayToBST(nums.slice(0,mid)) // 递归创建左子树
    root.right = sortedArrayToBST(nums.slice(mid+1)) // 递归创建右子树
    return root
};
