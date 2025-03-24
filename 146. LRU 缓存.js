/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    // 容量
    this.capacity = capacity
    // 哈希表
    this.values = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const hasKey = this.values.has(key)// 检查是否存在
    if(hasKey){
        const val = this.values.get(key)   // 获取当前值
        this.values.delete(key) // 删除当前值
        this.values.set(key, val) // 重新插入，移动到末尾，认为为最新
        return val
    }else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果不存在，更新到末尾，认为最新
    if (this.values.has(key)) {
        this.values.delete(key)
    }
    // 如果超出限制，删除最少使用的，即map的第一个，插入新值到末尾
    if(this.values.size >= this.capacity){
      this.values.delete(this.values.keys().next().value)
    }
    this.values.set(key, value)
};




// var LRUCache = function (capacity) {
//   this.capacity = capacity
//   this.values = new Map()
// };


// LRUCache.prototype.get = function (key) {
//   const hasKey = this.values.has(key)
//   if (hasKey) {
//     const val = this.values.get(key)
//     this.values.delete(key)
//     this.values.set(key, val)
//     return val
//   }
//   return -1
// };


// LRUCache.prototype.put = function (key, value) {
//   // 已有的，更新到最后
//   if (this.values.has(key)) {
//     this.values.delete(key)
//   }
//   // 超出限制时插入，删除最少使用的
//   if (this.values.size >= this.capacity && !this.values.has(key)) {
//     const deletedKey = this.values.keys().next().value
//     this.value  s.delete(deletedKey)
//   }
//   this.values.set(key, value)
// };