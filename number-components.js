/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Input:
// head: 0 -> 1 -> 2 -> 3
// G = [0, 1, 3]

var numComponents = function(head, G) {
  let result = 0;
  let mark = false;
  let i = 0;

  while (head !== null && i !== G.length) {
    if (G.indexOf(head.val) === -1) {
      head = head.next;
      mark = false;
      continue;
    }

    if (mark) {
      head = head.next;
    } else {
      mark = true;
      result++;
      head = head.next;
    }

    i++;
  }

  return result;
};
