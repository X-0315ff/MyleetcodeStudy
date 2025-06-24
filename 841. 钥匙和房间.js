/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited  = new Set()

    function dfs(roomID){
      // 当前进入 roomID 号房间
      visited.add(roomID) // 标记该房间为“已访问”
      for(const key of rooms[roomID]){
         // 如果这个钥匙对应的房间还没有访问过
        if(!visited.has(key)){
          dfs(key); // 递归访问这个房间
        }
      }
    }

    dfs(0)
    return rooms.length === visited.size
};
let rooms =  [[1,3],[3,0,1],[2],[0]]
canVisitAllRooms(rooms)