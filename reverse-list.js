// Input: 1 -> 2 -> 3 -> NULL
// Output: 3 -> 2 -> 1 -> NULL

function ListNode(val) {
  this.val = val;
  this.next = null;
}


var reverseList = function (head) {
  let pre = null;
  console.log(head)

  while (head) {
    const next = head.next;
    console.log(next)
    head.next = pre;
    console.log(head)
    pre = head;
    console.log(pre)
    head = next;
  }
  console.log(pre)

  return pre;
};

function generateListNode(sumNodeArray) {
  let pre = null
  while (sumNodeArray.length > 0) {
    const node = new ListNode(sumNodeArray.pop())
    node.next = pre
    pre = node
  }
  return pre
}

const list = generateListNode([1, 2, 3])
reverseList(list)