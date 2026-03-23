// Recursão: cálculo do fatorial (nível intermediário)

function fatorial(n) {
  if (typeof n !== 'number' || n < 0) throw new Error('n deve ser um número inteiro não-negativo');
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

console.log('fatorial(5) =', fatorial(5)); // 120

// Recursividade
const memoFact = (function () {
  const cache = {0: 1, 1: 1};
  return function fact(n) {
    if (n in cache) return cache[n];
    cache[n] = n * fact(n - 1);
    return cache[n];
  };
})();

console.log('memoFact(10) =', memoFact(10)); // 3628800
