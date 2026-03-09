// Encapsulamento em JS (campo privado usando # e closures)

class Conta {
  #saldo = 0; // privado
  constructor(titular) {
    this.titular = titular;
  }
  depositar(valor) {
    if (valor <= 0) throw new Error('valor deve ser positivo');
    this.#saldo += valor;
  }
  sacar(valor) {
    if (valor <= 0) throw new Error('valor deve ser positivo');
    if (valor > this.#saldo) throw new Error('saldo insuficiente');
    this.#saldo -= valor;
  }
  verSaldo() {
    return this.#saldo;
  }
}

const c = new Conta('Ana');
c.depositar(200);
try { c.sacar(50); } catch(e) { console.error(e.message); }
console.log('saldo =', c.verSaldo());
