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
 * @param {number} key
 * @return {TreeNode}
 */

// 根据题意，如果要删除的节点有两个子节点，应使用：
// 找到“右子树中的最小值”或“左子树中的最大值”来替代当前节点

var deleteNode = function(root, key) {
    if(!root) return null
    // 如果 key < 当前值，去左子树递归删除
    if(key < root.val){
      root.left = deleteNode(root.left, key)
    // 如果 key > 当前值，去右子树递归删除
    }else if(key > root.val){
      root.right = deleteNode(root.right, key)
    // 找到了要删除的节点 
    }else { 

      // 没有左子树，返回右子树
      if(!root.left) return root.right
      // 没有右子树，返回左子树
      if(!root.right) return root.left
      // 左右子树都存在:找右子树的最小节点（中序后继）    
      let minNode = getmin(root.right)
      // 用这个最小节点的值替换当前值
      root.val = minNode.val
      // 再递归去右子树删除这个最小节点
      root.right = deleteNode(root.right , minNode.val)
    }
    // 返回当前节点（可能更新过）
    return root
};


// 二叉搜索树（BST）;树中最小的值，一定在最左边的节点。
function getmin(node){
  while(node.left){
    node = node.left
  }
  return node
}