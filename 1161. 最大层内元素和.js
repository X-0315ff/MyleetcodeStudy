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
 * @return {number}
 */

// 类似199题二叉树的右视图
// 队列 +  + 层序遍历（BFS）

var maxLevelSum = function(root) {
    // 初始化最大和为根节点的值
    let maxsum = root.val
    // 初始化结果层数为第1层
    let res = 1
    // 初始化队列，用于层序遍历，初始只包含根节点
    let queue = [root]
    // 记录当前层数，从1开始
    let pre = 1

    // 开始层序遍历，只要队列不为空就继续
    while(queue.length){
        // 当前层的节点数
        let len = queue.length
        // 当前层的值的总和
        let sum = 0

        // 遍历当前层的所有节点
        for(let i = 0; i < len; i++){
            // 从队列中取出当前节点
            let node = queue.shift()
            // 累加当前层的节点值
            sum += node.val
            // 将左子节点加入队列（如果存在）
            if(node.left) queue.push(node.left)
            // 将右子节点加入队列（如果存在）
            if(node.right) queue.push(node.right)
        }

        // 如果当前层的和大于之前记录的最大和
        if(sum > maxsum){
            // 更新最大和
            maxsum = sum
            // 更新结果层数为当前层
            res = pre
        }

        // 层数加一，继续下一层
        pre++
    }

    // 返回最大和所在的层数
    return res
};