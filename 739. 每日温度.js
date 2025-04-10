/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 
// 73,74,75,71,69,72,76,73
// 0  1  2  3  4  5  6  7
// 1, 1  4  2  1  1  0  0  



var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0)  
    const stack = []
 
    for(let i = 0; i < temperatures.length ; i++){
        // 循环与栈顶元素比较，当栈为空或栈顶元素大于当前元素退出循环
        while(stack.length >  0 &&  temperatures[i] > stack[stack.length - 1].value){
          // 弹出栈顶元素并记录
          let prev = stack.pop()
          // 栈顶对应索引值结果为key值差
          answer[prev.key] = i -  prev.key
        }
        // 
        stack.push({ key :i , value : temperatures[i] })
    }
    return answer

};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
