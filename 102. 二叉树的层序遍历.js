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
 * @return {number[][]}
 */

//层序遍历符合队列的先进先出概念
// 用数组模拟队列

var levelOrder = function(root) {
    if(!root) return [] 
    let res = []
    let queue = [root] // 初始化队列
    while(queue.length){ // 因为整个层序过程模拟队列，当队列为空，则层序遍历结束
       let len = queue.length//当前层的节点数目
       let arr = [] // 存储每一层的值
      //  关键在于队列的变化:for循环结束当前层节点出列，队列里放的是下一层节点
       for(let i = 0; i < len; i++){
          let node = queue.shift() // 让当前层节点出列
          arr.push(node.val)
          if(node.left) queue.push(node.left)
          if(node.right) queue.push(node.right)
       }
      res.push(arr)
    }
    return res
};