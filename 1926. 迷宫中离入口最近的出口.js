/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}   
 */

// 队列 + bfs(广度优先搜索)
var nearestExit = function(maze, entrance) {
    const m = maze.length, n = maze[0].length;
    // 四个方向
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    // 队列初始化 : x, y ,步数
    const queue = [[entrance[0], entrance[1], 0]]; // [x, y, steps]
    // 标记入口已访问
    maze[entrance[0]][entrance[1]] = '+';

    while (queue.length > 0 ) {
        // 出队
        const [ x, y , steps] = queue.shift()

        for( let [dx, dy] of directions) {
           const newX = x + dx
           const newy = y + dy
           // 越界 或是墙壁则跳过
           if(newX < 0 || newX >= m || newy < 0 || newy >= n || maze[newX][newy] !== '.') continue

           // 如果是出口，返回步数
           if(newX === 0 || newX === m - 1 || newy === 0 || newy === n - 1) {
                return steps + 1;
           }

            // 都不是则标记已访问
            maze[newX][newy] = '+'
            // 入队
            queue.push([newX,newy, steps + 1])
        }
    }

    return -1; // 如果没有找到出口，返回 -1
};