/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 递归法：问题的本质就是在知道先序遍历和中序遍历的情况下，不断的找根节点以及对应的左右子树
// 因为先序遍历的第一个元素就是根节点，所以在中序遍历中找到这个根节点并划分左右子树
// 又因为我们知道了中序遍历的左右子树个数，所以在先序遍历中也能区分左右子树，
// 即如果中序遍历中发现左子树长度为1，那么在先序遍历中根结点后面一个就是左子树，左子树再后面即是右子树


var buildTree = function(preorder, inorder) {
    // 根据题解需要不停地划分左右子树，那么当左右子树长度为0时，也就是数组这两个数组长度为0时，返回null
    // 又因为左右子树的划分基于中序遍历，所以inorder.length代表当前子树的范围，当前子树不存在返回 null
    if(inorder.length === 0){
        return null
    }
    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid+1))
    return root
};