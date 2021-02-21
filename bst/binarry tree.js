//binarry Tree
function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

class Bst {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      //there is no root node
      this.root = newNode;
    } else {
      //there is root Nodes
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      !node.left ? (node.left = newNode) : this.insertNode(node.left, newNode);
    } else {
      //insert it in the right node
      //condition :newNode.data>node.data
      !node.right
        ? (node.right = newNode)
        : this.insertNode(node.right, newNode);
    }
  }
  printTree() {
    return this.root;
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}

const tree = new Bst();
tree.insert(7);
tree.insert(10);
tree.insert(14);
tree.insert(13);
tree.insert(3);
tree.insert(6);
tree.insert(1);
tree.insert(4);
// console.log(tree);
const root = tree.printTree();
console.log(tree.inorder(root));
