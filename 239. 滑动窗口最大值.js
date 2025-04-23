/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 双端队列：
// 我们需要维护一个双端队列，里面存的是数组的下标，但遵循两个关键规则：
// 队列中的元素对应的值是 从大到小排列的（不是下标大小，而是 nums[i] 的值）。
// 队首是当前窗口的最大值下标。
var maxSlidingWindow = function(nums, k) {
	// 存下标的队列
	const deque = []
	const result = []

	for(let i = 0; i< nums.length; i++){
		// 移除队首已不再窗口内的元素，即移除过期元素
		if(deque.length && deque[0] < i - k + 1){
			deque.shift()
		}

		// 从队尾开始，移除所有比当前 nums[i] 小的元素
		while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
			deque.pop()
		}

		// 然后将当前元素下标添加进队尾
		deque.push(i)

		// 最后，如果窗口已经形成了，即 i >= k - 1
		if(i >= k - 1){
			result.push(nums[deque[0]])
		}

	}
	return result

};
let nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlidingWindow(nums,k));

// 暴力解法： 超时！
// var maxSlidingWindow = function(nums, k) {
//     const res = []
//     //  外层for：
//     for(let i = 0; i < nums.length - k + 1; i++){
//       const arr = []
//       for(let j = i ; j < k + i; j++){
//         arr.push(nums[j])
//       }
//       res.push(Math.max(...arr))
//     }
//   return res

// };

