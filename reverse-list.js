// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

var reverseList = function(head) {
  if (!head) return head;

  let first = head;
  let cur = head.next;

  while (cur) {
    head.next = cur.next;
    cur.next = first;
    first = cur;
    cur = head.next;
  }

  return first;
};
