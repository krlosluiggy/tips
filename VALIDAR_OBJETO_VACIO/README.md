# 💡 Tip de Programación: Validar objeto vacío

```javascript
const cava = {}; // 🍷 Sin vinos
console.log(Object.keys(cava).length === 0); 
// true (no hay botellas 😅).
```

## 📚 Explicación
🔎 Explicación: Object.keys() devuelve un array con las propiedades del objeto.
