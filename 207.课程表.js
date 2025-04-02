/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// BFS 拓扑排序、有向图、入度
// [1,0]说明1的前置课程是0，那么1的入度+1
// [1,2]说明1的前置课程是2，那么1的入度+1
// [2,0]说明2的前置课程是0，那么2的入度+1
// 此时0的入度是0，1的入度是2，2的入度是1，我们只能先修入度为0的课程，即0课程
// 为此，我们创建一个数组，用来记录每个课程的入度。数组长度等于课程总数，初始化为0。
// 用数组索引表示课程编号

var canFinish = function(numCourses, prerequisites) {
  // 用0初始化
  let inDegree = new Array(numCourses).fill(0);
  // 创建一个邻接表，用来记录每个课程的前置课程
  let graph = new Map()
  for(let [cur,pre] of prerequisites){
    if(!graph.has(pre)){
      graph.set(pre,[])
    }
    graph.get(pre).push(cur)
    // 对应的课程入度+1
    inDegree[cur]++
  }
  // 将入度为0的课程加入队列
  let queue = []
  for(let i = 0; i < numCourses; i++){
    if(inDegree[i] === 0){
      queue.push(i)
    }
  }
  // 处理队列, 每次取出入度为 0 的课程，计数 +1
  // 当计数等于课程总数时，说明所有课程都可以修完，如果不相等，则说明有课程不能修完，返回 false
  let count = 0
  while(queue.length){
    let course = queue.shift()
    count++
    // 检查该课程是否有依赖它的后续课程
    if(graph.has(course)){
      // 遍历该课程的后续课程
      for(let nextcur of graph.get(course)){
        inDegree[nextcur]--
        // 如果 next 课程的 inDegree 变成 0，说明它的所有前置课程都修完了，可以开始修它，所以加入 queue
        if(inDegree[nextcur] === 0){
          queue.push(nextcur)
        }
      }
    }
  }
  return count === numCourses
};