# 💡 Tip de Programación: Quitar valores false en array

```javascript
const datos = [0, 1, false, 2, "", 3, null];
const limpio = datos.filter(Boolean);
console.log(limpio); // [1, 2, 3]
```

## 📚 Explicación
🔎 Explicación: Boolean elimina false, null, 0, "", undefined del array.
