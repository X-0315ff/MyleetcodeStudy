/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 双指针法
var isSubsequence = function(s, t) {
    let i = 0, j = 0
    while( i < s.length && j < t.length){
        if(s[i] === s[j]){
            i++
        }
        j++
    }
    return i === s.length  
};

// 暴力双循环
// var isSubsequence = function(s, t) {
//     if(s.length === 0) return true
//     if(t.length === 0) return false

//     for(let i = 0, j = 0; i < s.length && j < t.length; j++){
//         if(s[i] === t[j]){
//             i++
//         }
//         if(i === s.length) return true
//     }
//     return false
// };