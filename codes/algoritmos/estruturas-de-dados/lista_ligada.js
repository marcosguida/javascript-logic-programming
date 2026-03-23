// Lista Ligada (Linked List) simples — operações intermediárias
// Suporta: append, prepend, remove, find, toArray

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = node;
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  remove(value) {
    if (!this.head) return;
    while (this.head && this.head.value === value) this.head = this.head.next;
    let cur = this.head;
    while (cur && cur.next) {
      if (cur.next.value === value) cur.next = cur.next.next;
      else cur = cur.next;
    }
  }
  find(value) {
    let cur = this.head;
    while (cur) {
      if (cur.value === value) return cur;
      cur = cur.next;
    }
    return null;
  }
  toArray() {
    const out = [];
    let cur = this.head;
    while (cur) {
      out.push(cur.value);
      cur = cur.next;
    }
    return out;
  }
}


const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.prepend(0);
ll.append(2);
console.log('lista =', ll.toArray());
ll.remove(2);
console.log('depois remover 2 =', ll.toArray());
console.log('find 1 =', ll.find(1));
