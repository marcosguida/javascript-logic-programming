// Implementação de Pilha (Stack) 
// Métodos: push, pop, peek, isEmpty, size

class Stack {
  constructor() {
    this._items = [];
  }
  push(item) {
    this._items.push(item);
  }
  pop() {
    return this._items.pop();
  }
  peek() {
    return this._items[this._items.length - 1];
  }
  isEmpty() {
    return this._items.length === 0;
  }
  size() {
    return this._items.length;
  }
}


const pilha = new Stack();
pilha.push(1);
pilha.push(2);
pilha.push(3);
console.log('peek =', pilha.peek());
console.log('pop =', pilha.pop());
console.log('size =', pilha.size());
