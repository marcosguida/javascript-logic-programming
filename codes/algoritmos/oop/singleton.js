// Padrão Singleton em JavaScript (módulo simples)

const Config = (function () {
  let instance;
  function create(config) {
    return { ...config };
  }
  return {
    getInstance(config = {}) {
      if (!instance) instance = create(config);
      return instance;
    }
  };
})();

const c1 = Config.getInstance({env: 'dev'});
const c2 = Config.getInstance({env: 'prod'});
console.log('c1 === c2?', c1 === c2);
console.log('config =', c1);
