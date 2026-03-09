// Polimorfismo: métodos com o mesmo nome em classes diferentes

class Animal {
  falar() {
    return '...';
  }
}
class Cachorro extends Animal {
  falar() { return 'Au au'; }
}
class Gato extends Animal {
  falar() { return 'Miau'; }
}

function fazerFalar(a) {
  console.log(a.falar());
}

fazerFalar(new Cachorro());
fazerFalar(new Gato());
