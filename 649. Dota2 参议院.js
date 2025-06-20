/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let Radiant = []
    let Dire = []
    const n = senate.length
    for(let i = 0; i < n; i++){
      if(senate[i] == 'R'){
        Radiant.push(i)
      }else {
        Dire.push(i)
      }
    }


    while(Radiant.length && Dire.length){
      // 取队首元素--删除队首
      let r = Radiant.shift()
      let d = Dire.shift()

      // 比较索引值，谁就能禁掉对方（把自己加入下一轮， +n表示）
      if(r < d){
        Radiant.push(r + n)
      }else {
        Dire.push(d + n)
      }
    }
    

    return Radiant.length > 0 ? 'R' : 'D'
       
};
let senate = 'RRRDD'
console.log(predictPartyVictory(senate));
