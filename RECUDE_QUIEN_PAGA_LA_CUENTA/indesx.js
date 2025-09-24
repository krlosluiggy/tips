const cuenta = [5, 10, 20]; // precios de las rondas
const total = cuenta.reduce((acc, val) => acc + val, 0);
console.log(`Total a pagar: $${total} 💸`);
// Total a pagar: $35 💸
