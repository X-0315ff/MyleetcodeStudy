/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */


// 图 + dfs

// 要求的是间接除法的值
// 图是怎么模拟这个过程的？
//   建立的是一个 带权重的双向图，用邻接表表示，
//   已知： a / b = 2.0
//   那么： a —(2.0)—> b      b —(1/2.0)—> a
//   我们把每个变量当成一个节点，每个除法当成一条带权重的边。
//   沿着 a → b → c 的路径，把所有边的“除法值”连乘起来
// 为什么乘法是“唯一正确的操作”？
//    因为每条边本质是一个比值，它们可以连乘推导新的比值
//    a / b = x, b / c = y → a / c = x * y
var calcEquation = function(equations, values, queries) {
     // 构建图：变量名作为节点，边带有权重（比值）
    const graph = buildGraph(equations, values);

    const res = []
    

    // 对每个查询进行深度优先搜索（DFS）
    for(const [a, b] of queries) {
      const visited = new Set(); // 记录访问过的节点
      const results = dfs(graph, a, b, 1.0,visited)
      res.push(results)
    }
    return res
}


// 构建双向图
function buildGraph(equations, values) {
  const graph = new Map();

  for(let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i]
    const val = values[i];

      // 如果 a 或 b 没出现在图中，先初始化
    if(!graph.has(a)) graph.set(a, []);
    if(!graph.has(b)) graph.set(b, []);

    // a / b = val → 添加 a -> b 权重 val
    graph.get(a).push([b, val])
    // b / a = 1 / val → 添加 b -> a 权重 1/val
    graph.get(b).push([a, 1 / val])
  }
  

  return graph
}

// 从 start 出发，寻找到 end 的路径，累乘路径上的权重
function dfs(graph, start, end,accProduct, visited) {
  // 无此变量，无法计算
  if(!graph.has(start) || !graph.has(end)) return -1;

  // 找到终点
  if(start === end) return accProduct;
  
  visited.add(start); // 标记当前节点为已访问

  // 遍历当前节点的所有邻居
  for(const [neighbor, weight] of graph.get(start)) {
    // 如果邻居已经访问过，跳过
    if(visited.has(neighbor)) continue;

    // 递归搜索邻居节点,累乘当前权重
    const result = dfs(graph, neighbor, end, accProduct * weight, visited);
    
    // 如果找到结果，直接返回
    if(result !== -1) return result;
  }

  // 如果没有找到路径，返回 -1
  return -1
}