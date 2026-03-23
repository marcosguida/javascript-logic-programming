// Uso de map, filter e reduce
// Exemplo: processar uma lista de objetos (vendas) para obter receita por vendedor

const vendas = [
  {vendedor: 'Ana', valor: 120},
  {vendedor: 'Bruno', valor: 210},
  {vendedor: 'Ana', valor: 75},
  {vendedor: 'Carlos', valor: 300},
  {vendedor: 'Bruno', valor: 90}
];

// 1) Map: transformar (aqui mantemos, mas poderia criar representação)
const valores = vendas.map(v => v.valor);
console.log('valores =', valores);

// 2) Filter: vendas acima de 100
const vendasAcima100 = vendas.filter(v => v.valor > 100);
console.log('vendasAcima100 =', vendasAcima100);

// 3) Reduce: soma total
const total = vendas.reduce((acc, v) => acc + v.valor, 0);
console.log('total =', total);

// 4) Agrupar por vendedor (reduce)
const porVendedor = vendas.reduce((acc, v) => {
  acc[v.vendedor] = (acc[v.vendedor] || 0) + v.valor;
  return acc;
}, {});
console.log('porVendedor =', porVendedor);
