/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 创建头、尾指针，头指针用来记录和结果链表，尾指针用来记录当前节点
    let head = null, tail = null;
    // 创建进位变量
    let carry = 0;
    // 当两个链表都不为空时，循环执行下面的代码
    while (l1 || l2) {
      // n为当前节点的值，如果节点值为空，则赋值为0
      // 比如 l1: 9 -> 9 -> 9 -> 9 -> 9 -> 9 -> null
      //      l2: 1 -> 2 -> 3 -> 4 -> null
      //      999999 
      //   +  123400
      //      0234001
      let n1 = l1 ? l1.val : 0;
      let n2 = l2 ? l2.val : 0;
      let sum = n1 + n2 + carry;
      // 关键：判断是否是第一个节点，如果 head 为空，说明当前是第一个节点
      if(!head){
        // 同时让头、尾指针都指第一个节点向
        head = tail = new ListNode(sum % 10);
      }else {
        // 将新的节点添加到链表尾部
        tail.next = new ListNode(sum % 10);
        // 移动尾指针
        tail = tail.next;
      }
      // 如果有进位，则进位值为1
      carry = sum >= 10 ? 1 : 0;
      // 移动链表指针
      if(l1) l1 = l1.next;
      if(l2) l2 = l2.next;
    }
    // 当前链表遍历结束，如果还有进位，则创建一个新节点，值为1，并添加到链表尾部
    if(carry === 1){
      tail.next = new ListNode(1);
    }
    return head; 
};