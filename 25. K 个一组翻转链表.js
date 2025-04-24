/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 先反转k个值，再递归链接
var reverseKGroup = function(head, k) {
    if(!head || k === 1) return head
    // Step 1: 判断剩下是否有 k 个节点
    let node = head
    for(let i = 0;i < k; i++){
      if(!node) return head
      node = node.next
    }
    // head → 1 → 2 → 3 → 4 → 5
    // step 2: 翻转前k个节点
    let prev = null,curr = head
    for(let i = 0; i < k; i++){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    } 
    // 把翻转后的前一段链表的尾部，连接到后面继续翻转的子链表上”
    head.next = reverseKGroup(curr,k)

    // 返回当前k组的头节点
    return prev
};