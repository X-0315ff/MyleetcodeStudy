/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = []
    
    for(let a of asteroids){
      let alive = true
      // 当满足以下条件时相撞：
        // - 当前小行星是负数（向左移动）
        // - 栈顶小行星是正数（向右移动）
      while(
        alive && // 小行星存活
        stack.length > 0 &&    // 栈不为空
        a < 0 &&   // 当前行星向左
        stack[stack.length - 1] > 0 // 栈顶元素向右
      ){
        // 栈顶向右的行星
        let top = stack[stack.length - 1]
        // 栈顶行星更小
        if(top < -a){
          stack.pop()
          // 当前行星依然存活
          // alive = true
        }else if(top === -a){ // 两者相等，相互摧毁
          stack.pop()
          alive = false
        }else {
          // 当前行星更小，被摧毁
          alive = false
        }
      }
      // 
      if(alive){
        stack.push(a)
      }
    }
    return stack
};  
asteroids = [2,1,-3]
console.log(asteroidCollision(asteroids));
