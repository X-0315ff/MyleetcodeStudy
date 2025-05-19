/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxAltitude = 0
    let currAltitude = 0
    for(let i of gain){
        currAltitude += i
        maxAltitude = Math.max(maxAltitude, currAltitude)
    }
    return maxAltitude
};
gain = [-4,-3,-2,-1,4,3,2]
console.log(largestAltitude(gain));
