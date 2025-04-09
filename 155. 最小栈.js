// 本题用 辅助栈 的思想解题
// 关键在于栈的特性先进后出，
// 只要当前元素小于等于辅助栈的栈顶元素，就将当前元素压入辅助栈，否则就将辅助栈的栈顶元素压入辅助栈。
// 举例：  普通栈   辅助栈
//          2            
//          1           
//          0         0
//          1         1
//          2         2

var MinStack = function() {
     this.stack = []; // 普通栈
     this.minStack = []; // 辅助栈
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    // 如果辅助栈为空，或者当前元素小于等于辅助栈的栈顶元素，就将当前元素压入辅助栈
    if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]){
      this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // 先判断弹出的元素是否和辅助栈栈顶元素相等，如果相等先弹出辅助栈元素再弹出普通栈元素

  if(this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]){
    this.minStack.pop()
  }
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */