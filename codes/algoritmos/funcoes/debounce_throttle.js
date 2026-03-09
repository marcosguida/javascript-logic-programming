// Debounce e Throttle — utilitários comuns para tratar eventos
// Debounce: agrupa eventos e executa a função apenas depois de um intervalo sem novos eventos
// Throttle: garante execução no máximo uma vez a cada intervalo

function debounce(fn, wait = 300) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

function throttle(fn, limit = 200) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Exemplo de uso (simulado via chamadas rápidas)
const deb = debounce(() => console.log('debounced at', Date.now()), 100);
const thr = throttle(() => console.log('throttled at', Date.now()), 100);

console.log('Simulando chamadas:');
for (let i = 0; i < 5; i++) {
  deb();
  thr();
}

// Aguarde alguns ms no console para ver diferenças
