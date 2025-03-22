/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 创建一个头节点，值为-1，next为null
    const head = new ListNode(-1)
    // 创建一个指针，指向头节点
    let cur = head
    while (list1 && list2) {
        // 比较两个链表的值，将较小的值赋给指针
        if(list1.val < list2.val){
          cur.next = list1
          list1 = list1.next
        }
        else{
          cur.next = list2
          list2 = list2.next
        }
        // 指针移动到下一个节点
        cur = cur.next
    }
    // 循环结束后会有某个链表为空，将不为空的链表赋给指针
    cur.next = list1 || list2
    return head.next
};