# 💡 Tip de Programación: Contar ocurrencias en un array

```javascript
const frutas = ["🍎", "🍌", "🍎", "🍊", "🍎"];
const conteo = frutas.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});
console.log(conteo); // { '🍎': 3, '🍌': 1, '🍊': 1 }
```

## 📚 Explicación
🔎 Explicación: Boolean elimina false, null, 0, "", undefined del array.