/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
// 如果没有 random 指针，只需在遍历链表的同时，依次复制每个节点（创建新节点并复制 val），添加在新链表的末尾。
// 有 random 指针，问题就变得复杂了，我们需要知道 random 指向的那个节点，在新链表中是哪个节点。
// 我们可以依次复制每个节点（创建新节点并复制 val 和 next），把新节点直接插到原节点的后面，形成一个交错链表
// 然后遍历这个交错链表，假如节点 1 的 random 指向节点 3，那么就把节点 1 ′的 random 指向节点 3 的下一个节点 3′，这样就完成了对 random 指针的复制。
//  最后，从交错链表链表中分离出新节点，即为深拷贝后的链表

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
  if (head === null) {
    return null;
  }
  // 复制每个节点，把新节点直接插到原节点的后面
  for (let cur = head; cur; cur = cur.next.next) {
    cur.next = new _Node(cur.val, cur.next, null);
  }

    // 遍历交错链表中的原链表节点
    for (let cur = head; cur; cur = cur.next.next) {
      if (cur.random) {
          // 要复制的 random 是 cur.random 的下一个节点
          cur.next.random = cur.random.next;
      }
  }

  // 把交错链表分离成两个链表
  const newHead = head.next;
  let cur = head;
  for (; cur.next.next; cur = cur.next) {
      const copy = cur.next;
      cur.next = copy.next; // 恢复原节点的 next
      copy.next = copy.next.next; // 设置新节点的 next
  }
  cur.next = null; // 恢复原节点的 next
  return newHead;


}
