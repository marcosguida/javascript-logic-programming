// Árvore Binária simples com travessias (preorder, inorder, postorder)
// Operações: inserir (simples), travessias recursivas

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let cur = this.root;
    while (true) {
      if (value < cur.value) {
        if (!cur.left) {
          cur.left = node; break;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = node; break;
        }
        cur = cur.right;
      }
    }
  }
  preorder(node = this.root, out = []) {
    if (!node) return out;
    out.push(node.value);
    this.preorder(node.left, out);
    this.preorder(node.right, out);
    return out;
  }
  inorder(node = this.root, out = []) {
    if (!node) return out;
    this.inorder(node.left, out);
    out.push(node.value);
    this.inorder(node.right, out);
    return out;
  }
  postorder(node = this.root, out = []) {
    if (!node) return out;
    this.postorder(node.left, out);
    this.postorder(node.right, out);
    out.push(node.value);
    return out;
  }
}

// Teste
const bt = new BinaryTree();
[8, 3, 10, 1, 6, 14, 4].forEach(n => bt.insert(n));
console.log('preorder =', bt.preorder());
console.log('inorder =', bt.inorder());
console.log('postorder =', bt.postorder());
