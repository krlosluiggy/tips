# 💡 Tip de Programación: Encontrar valores únicos entre arrays

¿Qué bebidas únicas hay en la fiesta? 🎉🍷🍸🍹

Encontrar valores únicos entre arrays.

```javascript
const mesaA = ["🍷", "🍹"];
const mesaB = ["🍹", "🍸", "🍺"];
const unicos = [...new Set([...mesaA, ...mesaB])];
console.log(unicos); 
// ["🍷", "🍹", "🍸", "🍺"]
```

## 📚 Explicación
🔎 Explicación: Set elimina duplicados y deja solo lo único.