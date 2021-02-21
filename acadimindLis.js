class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(val) {
    const newNode = { value: val, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }
  prepend(val) {
    let node = { value: val, next: this.head };

    this.head = node;
  }

  toArray() {
    const element = [];
    let curNode = this.head;
    while (curNode) {
      element.push(curNode);
      curNode = curNode.next;
    }
    return element;
  }
  clear() {
    this.head = null;
    this.tail = null;
  }
}

const listOne = new List();
listOne.append(1);
listOne.append("sakib");
listOne.append("this is another data");
listOne.prepend("this is  prepended");
listOne.prepend("this is also prepended");
listOne.clear();
console.log(listOne.toArray());
