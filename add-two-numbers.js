/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    const listNode1 = getValue(l1)
    const listNode2 = getValue(l2)
    const sumNodeValue = parseInt(listNode1.join(''), 10) + parseInt(listNode2.join(''), 10)
    const sumNodeArray = sumNodeValue.toString().split('')
    const sumNode = generateListNode(sumNodeArray)
    return sumNode
};

function getValue(listNode, result = []) {
    result.push(listNode.val)
    if (!listNode.next) return result
    return getValue(listNode.next, result)
}

function generateListNode(sumNodeArray) {
    let node = new ListNode()
    while (sumNodeArray.length > 0) {
        const nodeVal = sumNodeArray.pop()
        const newNode = new ListNode(nodeVal)
        if (node.val === undefined) {
            node.val = nodeVal
        } else {
            let current = node
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
        }
    }
    return node
}

// const l1 = generateListNode([4, 5, 6, 7])
// const l2 = generateListNode([1, 2, 3, 7])
const l3 = generateListNode([1, 8])
const l4 = generateListNode([0])
// const l5 = generateListNode([2, 4, 3])
// const l6 = generateListNode([5, 6, 4])


// console.log(addTwoNumbers(l1, l2))
console.log(addTwoNumbers(l3, l4))
// console.log(addTwoNumbers(l5, l6))


