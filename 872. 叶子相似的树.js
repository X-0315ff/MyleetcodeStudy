/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
      // 辅助函数：获取一棵树的叶子节点值序列
      function getLeaves(root) {

        let res = []

        // 深度遍历
        function dfs(node){
          if(!node) return 
          
          // 添加叶子节点
          if(!node.left && !node.riht){
            res.push(node.val)
            return 
          }
          // 递归遍历左子树和右子树
          dfs(root.left)
          dfs(root.riht)
        }
        dfs(root)
        return res
      }

      // 获取两棵树的叶子节点序列
      let root1Leaves = getLeaves(root1)
      let root2Leaves = getLeaves(root2)

      // 如果两个序列长度不同，肯定不相同，直接返回 false
      if(root1Leaves.length !== root2Leaves.length) return false

      // 比较两个序列的每一个元素
      for(let i = 0; i < root1Leaves.length; i++){
        if(root1Leaves[i] !== root2Leaves[i]) return false
      }
      // 所有叶子值都一样，返回 true
      return true
};