// Implementação de Fila (Queue) — nível intermediário
// Métodos: enqueue, dequeue, front, isEmpty, size

class Queue {
  constructor() {
    this._items = [];
  }
  enqueue(item) {
    this._items.push(item);
  }
  dequeue() {
    return this._items.shift();
  }
  front() {
    return this._items[0];
  }
  isEmpty() {
    return this._items.length === 0;
  }
  size() {
    return this._items.length;
  }
}

// Teste
const fila = new Queue();
fila.enqueue('a');
fila.enqueue('b');
fila.enqueue('c');
console.log('front =', fila.front());
console.log('dequeue =', fila.dequeue());
console.log('size =', fila.size());
