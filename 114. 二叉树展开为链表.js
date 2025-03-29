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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 如何将二叉树展开为链表？ 
// 先将左子树插入到右边，再将右子树连接到原右子树
// 想要做到这点，就需要先把右子树展开记录右子树
// 所以使用后序遍历(右-左-根)

var flatten = function(root) {
    if(!root) return null
    // 先展开右子树
    flatten(root.right)
    flatten(root.left)

    //记录右子树
    let temp = root.right
    // 将左子树作为右子树
    root.right = root.left
    // 将左子树置空
    root.left = null
    // 使用 curr 遍历链表末尾，保证 root 不被改变
    let cur = root
    //  遍历到链表末尾
    while(cur.right){
        cur = cur.right
    }
    // 将原来的右子树接到末尾
    cur.right = temp
};