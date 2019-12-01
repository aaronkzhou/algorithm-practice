// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

var reverseList = function(head) {
  let pre = null;

  while (head) {
    const next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }

  return pre;
};
