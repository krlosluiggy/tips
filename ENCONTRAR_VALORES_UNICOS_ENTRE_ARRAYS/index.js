const mesaA = ["🍷", "🍹"];
const mesaB = ["🍹", "🍸", "🍺"];
const unicos = [...new Set([...mesaA, ...mesaB])];
console.log(unicos); 
// ["🍷", "🍹", "🍸", "🍺"]