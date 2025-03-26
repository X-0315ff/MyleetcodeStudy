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
// 递归法
var isSymmetric = function(root) {
  //  首先明白要比较的不是左右两个节点，
  //  而是根节点的左子树和根节点的右子树以及根节点的右子树和根节点的左子树比较
  // 所以是两个字数比较，所以创建接受两个参数的函数，一个是左子树，一个是右子树
  // 1. 确定递归的参数 root.left root.right和返回值true false 
  const compare = function(left, right){
    //2. 确定终止条件 空的情况
    //  if(left === null && right !== null){
    //   return false
    //  }else if(left !== null && right === null){
    //   return false
    //  }else if(left === null && right === null){ //在比较值之前，先判断是否为空
    //   return true
    //  }else if(left.val !== right.val){ 
    //   return false
    //  }
    // 优化判断：
    if (left === null && right === null) return true;    // 两边都为空，对称
    if (left === null || right === null || left.val !== right.val) return false;   // 空或值不同，不对称

    //  判断左子树的左节点与右子树的右节点是否相等
    let outSide = compare(left.left, right.right)
    // 判断左子树的右节点与右子树的左节点是否相等
    let inSide = compare(left.right, right.left)
    // 左子树与右子树是否相等
    return outSide && inSide
  }
  // 传入根节点的左右子树
  return compare(root.left, root.right)
};