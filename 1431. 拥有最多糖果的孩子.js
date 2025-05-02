/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies)
    const res = Array(candies.length).fill(false)
    for(let i in candies){
      if(candies[i] + extraCandies >= max){
        res[i] = true
      }
    }
    return res   
};
candies = [4,2,1,1,2]
extraCandies = 1
console.log(kidsWithCandies(candies,extraCandies));
