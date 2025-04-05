/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    let path = []
    let sum = 0
    function backtrack(start,sum){
      if(sum === target ){
        res.push([...path])
        console.log(path);
        return 
      }
      if(sum > target ){ return }
      for(let i = start;i < candidates.length; i++){
        // sum+=candidates[i]
        path.push(candidates[i])
        backtrack(i,sum + candidates[i])
        path.pop()
        // sum = sum - candidates[i]
      }
    }  
    backtrack(0,0)
    return res
};
candidates = [2,3,5]
target = 8
combinationSum(candidates,target)