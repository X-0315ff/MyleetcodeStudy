/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const heap = [];

  // 初始化，把每个链表的头节点放进堆中
  for (let node of lists) {
    if (node) heap.push(node);
  }

  // 自定义排序：按节点值升序排
  heap.sort((a, b) => a.val - b.val);

  const dummy = new ListNode(0);
  let curr = dummy;

  while (heap.length > 0) {
    // 弹出最小的节点
    const node = heap.shift();
    curr.next = node;
    curr = curr.next;

    // 如果弹出的节点还有下一个，加入堆中
    if (node.next) {
      heap.push(node.next);
      // 重新排序
      heap.sort((a, b) => a.val - b.val);
    }
  }

  return dummy.next;
};
