/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 快慢指针
var removeNthFromEnd = function(head, n) {
    let fast = slow = head;
    // 1. 快指针先走n步
    while(n--) {
      fast = fast.next;
    }
    // 如果 n 和 链表中总结点个数相同，即要删除的是链表头结点时，fast 经过上一步已经到外面了
    if(!fast) {
      return head.next;
    }
    // 2. 快慢指针同时走，当快指针到达链表末尾时，慢指针指向的节点就是倒数第n个节点的前一个节点
    while(fast && fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return head 
};