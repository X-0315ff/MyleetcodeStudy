/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const wordmap = new Map()
    for(let i=0; i<strs.length; i++){
      let p = strs[i].split("").sort().join("")
      // console.log(p)
      if(wordmap.has(p)){
        wordmap.get(p).push(strs[i])
      }else {
      let  arr = []
      arr.push(strs[i])
      wordmap.set(p,arr)
      // console.log(i);
      // console.log(wordmap);
      }
    }
    const result = [...wordmap.values()]
    // console.log(result);
    return result
    // aet
    // aet
    // ant
    // aet
    // ant
    // abt
    // Map(3) { aet => [0, 1, 3], ant =>  [2, 4], abt => [5]}

};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// groupAnagrams([""])