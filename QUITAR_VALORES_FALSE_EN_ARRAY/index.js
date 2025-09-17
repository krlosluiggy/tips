const datos = [0, 1, false, 2, "", 3, null];
const limpio = datos.filter(Boolean);
console.log(limpio); // [1, 2, 3]
