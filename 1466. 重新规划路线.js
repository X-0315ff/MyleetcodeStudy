/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
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
      if(directedEdges.has(`${form} => ${to}`)){
        // 方向错
        count++
      }
      dfs(neighbor,node)
    }
  }
  // 从城市0开始遍历，parent用-1表示无父节点
  dfs(0,-1)

  return count
};