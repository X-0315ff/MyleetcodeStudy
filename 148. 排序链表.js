/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if(!head) return head
    // 创建一个虚拟头节点
    let dummy = new ListNode(-1)
    dummy.next = head
    let cur =  head
    for(cur; cur ;cur = cur.next){
      for(let pre = head; pre.next; pre = pre.next){
        if(pre.val > pre.next.val)
          [pre.val, pre.next.val] = [pre.next.val, pre.val]
      }  

    }
    return dummy.next
  }
/*
4 2 1 3 
2 1 3 4


*/
