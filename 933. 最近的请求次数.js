
var RecentCounter = function() {
    this.queue = []; // 存储请求时间
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  // 添加新请求时间
  this.queue.push(t)
  // 移除早于 t - 3000 的请求
  while(this.queue[0] < t - 3000){
    this.queue.shift() // 删除队头元素
  }

  return this.queue.length

};
// 用队列先进先出，每次 ping 传入一个时间 t，把当前时间 t 加入队列。
// 把队列中所有小于 t - 3000 的时间弹出
/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */