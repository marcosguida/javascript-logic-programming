// Observer simples — Subject / Observer tradicional

class Subject {
  constructor() {
    this.observers = new Set();
  }
  subscribe(o) {
    this.observers.add(o);
  }
  unsubscribe(o) {
    this.observers.delete(o);
  }
  notify(data) {
    for (const o of this.observers) {
      try {
        o.update(data);
      } catch (e) {
        // isolar falhas de um observer
        console.error('Observer falhou:', e && e.message);
      }
    }
  }
}

class LoggerObserver {
  constructor(name) { this.name = name; }
  update(data) {
    console.log(`[${this.name}] recebeu:`, data);
  }
}

class SumObserver {
  constructor() { this.sum = 0; }
  update(value) {
    if (typeof value === 'number') this.sum += value;
    console.log('SumObserver soma atual =', this.sum);
  }
}

const subj = new Subject();
const log1 = new LoggerObserver('log1');
const log2 = new LoggerObserver('log2');
const sum = new SumObserver();
subj.subscribe(log1);
subj.subscribe(sum);
subj.notify('evento A');
subj.notify(5);
subj.subscribe(log2);
subj.notify('evento B');
subj.unsubscribe(log1);
subj.notify(10);

// Observações:
// - Padrão Observer é útil para desacoplar produtores de eventos dos consumidores.
