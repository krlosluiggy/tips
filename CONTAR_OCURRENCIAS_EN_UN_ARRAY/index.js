const frutas = ["🍎", "🍌", "🍎", "🍊", "🍎"];
const conteo = frutas.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});
console.log(conteo); // { '🍎': 3, '🍌': 1, '🍊': 1 }