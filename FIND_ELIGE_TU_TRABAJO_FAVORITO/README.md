# "Elige tu trago favorito 🍷🍸🍺"

Con find() buscamos un elemento dentro de la carta del bar.

```javascript
const carta = ["🍺", "🥤", "🍸", "🍷"];
const favorito = carta.find(bebida => bebida === "🍸");
console.log(`Hoy pido: ${favorito}`);
// Hoy pido: 🍸
```

## 🔎 Explicación:
find() devuelve el primer elemento que cumpla la condición. Aquí encontramos el cóctel 🍸 en la carta.