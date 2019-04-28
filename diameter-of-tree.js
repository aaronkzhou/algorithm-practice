var diameterOfBinaryTree = function(root) {
  let result = 1;
  dfs(root);

  function dfs(root) {
    if (!root) {
      return 0;
    }
    let l = dfs(root.left);
    let r = dfs(root.right);
    result = Math.max(result, l + r + 1);
    return Math.max(l, r) + 1;
  }

  return result - 1;
};
