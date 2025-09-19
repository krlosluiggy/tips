# 💡 Tip de Programación: Filtrar elementos de un array

Filtra los tragos 🍸🍺

```javascript
const bebidas = ["🍺", "🍸", "🍷", "🥤"];
const alcoholicas = bebidas.filter(b => b !== "🥤");
console.log(alcoholicas); 
// ["🍺", "🍸", "🍷"]
```

## 📚 Explicación
🔎 Explicación: filter() elimina lo que no cumple la condición.