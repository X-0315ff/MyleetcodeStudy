var twoSum = function(nums, target) {
  let arr = []
  for(let i=0; i<nums.length-1; i++){
    let p = target - nums[i]
    for(let j=i+1; j<nums.length; j++){
      if(p===nums[j]){
          arr.push(i)
          arr.push(j)
          return arr; // 找到符合条件的元素对后立即返回
      }
    }
  }
  return arr; // 如果没有找到符合条件的元素对，返回空数组
};

twoSum([3,1,2,4],6)