class Node {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  getValue() {
    return `Node ${this.value}`;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = undefined;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let currentNode = this.root;

    while (value !== currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = value;
          break;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = value;
          break;
        }
        currentNode = currentNode.right;
      } else {
        console.log('pls use a different value');
      }
    }
  }

  search(value) {
    let currentNode = this.root;
    if (!currentNode) return 'nothing can be searched';

    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }

    return 'nothing can be searched';
  }

  invert(node) {
    if (!node) return null;
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    if (node.left) {
      this.invert(node.left);
    }
    if (node.right) {
      this.invert(node.right);
    }
    return node;
  }
}
