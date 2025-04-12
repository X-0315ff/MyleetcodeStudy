/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 辅助栈思想
// 当元素不是0时添加形如[索引号,值]的键值对
// 遇到0时把栈里的元素依次比较
var canJump = function(nums) {
    const stack = []
    let res = false
    for(let i = 0; i < nums.length; i++){
      if(i === nums.length - 1) res = true
      if( nums[i] !== 0){
        stack.push([i,nums[i]])
      }else {
        // 当遇到0时循环比较    
//         0,1,2,3,4,5,6,7
// nums = [3,10,2,0,2,2,1,0]
        while(stack.length > 0){
          // 栈顶元素
          let pre = stack[stack.length - 1]
          // 能走的步数是否大于之间的长度
          if(pre[1] > (i - pre[0])){
            break
          }else {
            stack.pop()
          }
        }
        if(stack.length === 0) break
      }
    }
    return res
};
//         0,1,2,3,4,5,6,7
nums = [8,1,2,0,2,1,0,1]
console.log(canJump(nums));
