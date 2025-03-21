/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const map = new Map()
    while(head){
        if(map.has(head)) return true
        map.set(head,1)
        head = head.next
    }
    return  false
};