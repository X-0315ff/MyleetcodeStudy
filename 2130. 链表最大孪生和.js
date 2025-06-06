/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// 方法一：数组辅助法（简单好写）
// 方法二：快慢指针 + 反转链表（优化空间到 O(1)）
// 步骤：
// 1. 用快慢指针找到链表中点
// 2. 反转后半段链表
// 3. 从头和尾同步向中间遍历，求所有孪生和
// 4. 找出最大值
var pairSum = function(head) {

    // 找中点
    let slow = head,fast = head
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    // 如果链表是偶数长度，快慢指针法最后 slow 一定指向 右半边第一个节点
    let midHead = slow
    let pre = null
    // 反转链表
    while(midHead){  // 如果加上midHeadnext，意味着当最后一个节点的 next 为 null 时，它不会被反转进来，也就是说，链表尾节点被“漏掉了”！
      let nex = midHead.next
      midHead.next = pre
      pre = midHead
      midHead = nex
    }
    // 循环结束后lastHead应该是null，而pre才是表头

    // 遍历找出最大值
    let max = 0
    while(pre){
      max = Math.max(head.val + pre.val , max)
      head = head.next
      pre = pre.next
    }
    
    return max
};