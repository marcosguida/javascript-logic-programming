// Memoização: técnica para evitar recomputação
// Exemplo: sequência de Fibonacci com memoização

function fibMemo() {
  const cache = {0: 0, 1: 1};
  return function fib(n) {
    if (n in cache) return cache[n];
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fib = fibMemo();
console.log('fib(20) =', fib(20)); // 6765

// Função genérica de memoização para funções puras
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const res = fn(...args);
    cache.set(key, res);
    return res;
  };
}

const slowFib = memoize(function (n) {
  if (n < 2) return n;
  return slowFib(n - 1) + slowFib(n - 2);
});
console.log('slowFib(25) =', slowFib(25));
