/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// 首先题目意思为：给你一张有向图，你可以反转某些边的方向，使得 所有城市都能“走”到城市 0，你要返回 最少需要反转多少条边。
// 换个说法：我们从城市 0 出发，去“扫荡”整张地图，所以，我们做的是从 0 开始反向遍历整张图

// 思路：
// 我们构建无向图邻接表：表示每个城市的邻居有哪些
// 再构建原始有向边集合：表示原始给的方向有哪些
// 那么，我们从从0向外遍历并递归(dfs函数)

// 比如下面的例子：
// 你在执行： dfs(0, -1) ，从城市0开始遍历，parent用-1表示无父节点，parent避免来回跳
// 当前城市是 0，有个邻居是 1
// 是否能找到原始有向边是：  0 => 1
// 如果能找到明需要反转，因为1走不回来0
// 如果找不到，说明原来已经是 1 => 0 了，不需要反转
// 接着递归dfs(1,0) 

// 比如例子：
// n = 6
// connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]

// 原始边：
// 0 → 1
// 1 → 3
// 2 → 3
// 4 → 0
// 4 → 5

// 无向图邻接表：
// 0: [1, 4]
// 1: [0, 3]
// 2: [3]
// 3: [1, 2]
// 4: [0, 5]
// 5: [4]
var minReorder = function(n, connections) {
  // 用邻接表表示图，方便遍历（无向图结构）
  const graph = new Map();
  // 记录所有原始有向边，用于判断方向是否正确
  const directedEdges = new Set();

  // 构建邻接表和有向边集合
  for(const [form,to] of connections){
    if(!graph.has(form)) graph.set(form,[])
    if(!graph.has(to)) graph.set(to,[]) 

    // 无向图中，两个方向都添加
    graph.get(form).push(to)
    graph.get(to).push(form)

    // 记录原始有向边：记录为字符串，避免数组引用问题
    directedEdges.add(`${form} => ${to}`)
  }

  // 需要翻转的边数
  let count = 0
  // 从 node 出发，parent 是上一个访问的城市，防止回头
  function dfs(node, parent){
    for(let neighbor of graph.get(node)){
      if(neighbor === parent) continue
      // 判断方向是否和原始有向边一致，如果一致则++，因为我们是从0往外出来的
      if(directedEdges.has(`${node} => ${neighbor}`)){
        count++
      }
      // 接着递归
      dfs(neighbor,node)
    }
  }
  // 从城市0开始遍历，parent用-1表示无父节点
  dfs(0,-1)

  return count
};