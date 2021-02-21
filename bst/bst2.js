function makeNode(value) {
  return {
    value: value,
    right: null,
    left: null,
  };
}

//binarry tree class
class Bst {
  constructor() {
    this.root = null;
  }
  //insert a new node to the tree
  insert(value) {
    const newNode = makeNode(value);
    !this.root ? (this.root = newNode) : this.insertNode(this.root, newNode);
  }
  insertNode(parent, newNode) {
    if (newNode.value < parent.value) {
      //inset the node to the left
      if (!parent.left) {
        parent.left = newNode;
      } else {
        this.insertNode(parent.left, newNode);
      }
    } else {
      if (!parent.right) {
        parent.right = newNode;
      } else {
        this.insertNode(parent.right, newNode);
      }
    }
  }
  getTree() {
    return this.root;
  }
  treverse(node) {
    if (node !== null) {
      this.treverse(node.left);
      console.log(node.value);
      this.treverse(node.right);
    }
  }
}

const tree = new Bst();
for (let i = 0; i < 10; i++) {
  let number = Math.floor(Math.random(i) * 50);
  tree.insert(number);
}

let r = tree.getTree();
console.log(tree.treverse(r));
console.log(tree);
