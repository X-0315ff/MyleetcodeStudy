/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 节点的引用指针交换才是真正的节点交换，节点一 -> 节点二 应该叫换成 节点二 -> 节点一
//dummy -> 1 → 2 → 3 → 4 → 5  null
//dummy -> 2 → 1 → 3 → 4 → null 
// 注意： 
var swapPairs = function(head) {
  // 创建一个虚拟头节点
    let dummy = new ListNode(-1)
    // 创建指针，指向虚拟头节
    let pre = dummy
    pre.next = head
    while(head){
      let nxt = head.next
      head.next = nxt.next
      pre.next = nxt
      pre = head
      head = head.next
    }
    return dummy.next
};