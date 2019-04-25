// basic
class LinkedListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let node = new LinkedListNode(1)
node.next = new LinkedListNode(2)
node.next.next = new LinkedListNode(3)

while (node !== null) {
    console.log(node.data)
    node = node.next
}

// linkedList
const head = Symbol('head')
class LinkedList {
    constructor() {
        this[head] = null
    }

    add(data) {
        const newNode = new LinkedListNode(data)
        if (this[head] === null) {
            this[head] = newNode
        } else {
            let current = this[head]
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
        }
    }

    get(index) {
        if (index <= -1) return undefined
        if (index === 0) return this[head].data
        let i = 0
        let current = this[head]

        while (i < index) {
            current = current.next
            i++
        }

        return current ? current.data : undefined
    }

    remove(index) {
        if (index <= -1) return new Error('cannot find related data')
        let current = this[head]
        let previous = null

        if (index === 0 && current) {
            this[head] = current.next
            return current.data
        }

        let i = 0

        while (current !== null && i < index) {
            previous = current
            current = current.next
            i++
        }

        if (current !== null) {
            previous.next = current.next; // doesn't work yet
            return current.data;
        }

        return current.data
    }
}

const list = new LinkedList();
list.add("red");
list.add("orange");
list.add("yellow");
console.log(list.get(-1))
console.log(list.get(0))
console.log(list.get(1))
console.log(list.get(2))
console.log(list.get(3))
const list1 = new LinkedList();
list1.add("red");
list1.add("orange");
list1.add("yellow");
// console.log(list1.remove(-1))
// console.log(list1.remove(0))
console.log(list1.remove(1))
console.log(list1.get(1))




