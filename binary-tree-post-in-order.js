function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.inOrderTraversal = function(root) {
  if (root.left) {
    this.inOrderTraversal(root.left);
  }

  console.log(root.data);

  if (root.right) {
    this.inOrderTraversal(root.right);
  }
};

// Create a new Balanced Binary Tree as a sample input
// http://js-interview.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
var BST = new BinarySearchTree();
BST.insertNode(10);
BST.insertNode(15);
BST.insertNode(5);
BST.insertNode(2);
BST.insertNode(3);
BST.insertNode(12);
BST.insertNode(17);

BST.inOrderTraversal(BST.root); // 2, 3, 5, 10, 12, 15, 17
