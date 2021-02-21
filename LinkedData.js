class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    const node = makeNode(val);
    //now append it to the list
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    if (this.head === null) {
      this.head = node;
    }
    //inc the size
    this.size++;
  }
  //get the size of the list
  getSize() {
    return this.size;
  }
  printList() {
    return { item: this.head };
  }
  printListArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current);
      current = current.next;
    }
    return elements;
  }

  //prepend Mathode
  prepend(val) {
    const n = new makeNode(val);
    console.log(n);
    //first add make the head's next to the val

    n.next = this.head;
    this.head = n;
  }
  delete(value) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
}

function makeNode(val) {
  return {
    value: val,
    next: null,
  };
}
const one = new List();

one.append("one");
one.append("two");
one.append("three");
one.append("four");
one.append("five");
one.prepend("first");
one.delete("two");
let result = one.printList();
// console.log(result);
one.delete("five");
console.log(one.printListArray());
