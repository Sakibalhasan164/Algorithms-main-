// //this is the new data Structure
// //this is called the linked link

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
//   size() {
//     let count = 0;
//     let node = this.head;
//     while (node) {
//       count++;
//       node = node.next;
//     }
//     return count;
//   }
//   clear() {
//     this.head = null;
//   }
//   getLast(){

//   }
// }

// const node1 = new LinkedList(5);
// const node2 = new LinkedList(10);
// node1.next = node2;
// // console.log(node1);
// const list = new LinkedList(node1);
// // console.log(list.head.next.head);
// const size = list.size();
// console.log(size);
// list.clear();
// console.log(list.size());

// let list = null;

// let node = {
//   value: 3,
//   next: null,
// };
// //making a node
// function makeNode(value) {
//   return {
//     value: value,
//     next: null,
//   };
// }
// let four = makeNode(4);
// let three = makeNode(3);
// let two = makeNode(2);
// let one = makeNode(1);

// four.next = three;
// three.next = two;
// two.next = one;

// function printList(list) {
//   let current = list;
//   while (current) {
//     console.log(current.value);
//     current = current.next;
//   }
// }
// printList(four);

//this is objective oriented approach

function makeNode(val) {
  //this function returns a node for the constrctor functions mathod calld "APPENd"
  return {
    value: val,
    next: null,
  };
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(val) {
    let node = makeNode(val);
    if (!this.tail) {
      this.head = this.tail = node;
      return node;
    }
    this.tail.next = node;
    this.tail = node;
    return node;
  }
}
