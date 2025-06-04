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
// 快慢指针法
// slow 每次走一步，fast 每次走两步；
// 当 fast 到达尾部时，slow 正好指向中间节点。
// 用用pre记录slow的前一个节点
var deleteMiddle = function(head) {
  // 如果链表为空或只有一个节点 
  if(!head || !head.next) return null

  let slow = head
  let fast = head
  let pre = null
  while(fast && fast.next){ // 因为快指针要走两步，确保fast.next()有元素，不然fast.next().next()会报错
    pre = slow
    slow = slow.next
    fast = fast.next.next
  }
  // 删除中间结点
  pre.next = slow.next

  return head
};
