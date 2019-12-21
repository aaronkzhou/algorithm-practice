function BinaryTree(value) {
  this.value = value
  this.left = undefined
  this.right = undefined
}

function insert(value, tree) {
  if (value < tree.value) {
    if (!tree.left) {
      tree.left = new BinaryTree(value)
      return tree
    } else {
      return insert(value, tree.left)
    }
  } else {
    if (!tree.right) {
      tree.right = new BinaryTree(value)
      return tree
    } else {
      return insert(value, tree.right)
    }
  }
}

function search(value, tree) {
  if (value === tree.value) return tree
  if (value > tree.value) {
    return search(value, tree.right)
  } else {
    return search(value, tree.left)
  }
}

function diameterOfBinaryTree(tree) {
  let result = 1;
  dfs(tree);

  function dfs(tree) {
    if (!tree) return 0;
    let l = dfs(tree.left);
    let r = dfs(tree.right);
    result = Math.max(result, l + r + 1);
    return Math.max(l, r) + 1;
  }

  return result - 1;
}

function preOrderTraversal(tree) {
  console.log(tree.value)
  if (tree.left) {
    preOrderTraversal(tree.left)
  }
  if (tree.right) {
    preOrderTraversal(tree.right)
  }
}

function invert(tree) {
  if (!tree) return null
  let tmp = tree.left
  tree.left = tree.right
  tree.right = tmp
  if (tree.left) {
    invert(tree.left)
  }
  if (tree.right) {
    invert(tree.right)
  }
  return tree
}

const tree = new BinaryTree(123)
insert(23, tree)
insert(21, tree)
insert(121, tree)
insert(128, tree)

console.log(tree)
search(121, tree)
preOrderTraversal(tree)

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
    return node
  }
}
