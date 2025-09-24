# "¿Quién paga la cuenta? 💸🍺"

Con `reduce()` podemos sumar los valores, como si estuviéramos dividiendo la cuenta en la mesa.

```javascript
const cuenta = [5, 10, 20]; // precios de las rondas
const total = cuenta.reduce((acc, val) => acc + val, 0);
console.log(`Total a pagar: $${total} 💸`);
// Total a pagar: $35 💸
```

## 🔎 Explicación:
reduce() recorre el array y acumula valores. Aquí sumamos el costo total de las bebidas 🍺🍷.