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
// 奇数偶数拆分法
var oddEvenList = function(head) {
    if(!head) return null
    // odd 奇数， even偶数
    let oddHead = head, evenHead = head.next
    let odd = oddHead,even = evenHead
    while(even && even.next){
      // 链接奇数
      odd.next =even.next
      odd = odd.next
      // 链接偶数
      even.next = odd.next
      even = even.next
    }
    odd.next = evenHead
    return oddHead
};