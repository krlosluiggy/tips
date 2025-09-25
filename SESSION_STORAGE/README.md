#   “¿Tu pizza desaparece cuando cierras la pestaña? 🍕💻”

✨ Explicación con ejemplo

SessionStorage = Pizza servida en la mesa 🍽️
→ Mientras la pestaña esté abierta, puedes disfrutarla.
→ Cierras la pestaña… ¡y la pizza desaparece!

A diferencia de LocalStorage (nevera 🥶), aquí nada sobrevive al cierre de la pestaña.

## 🧑‍💻 Ejemplo en código
```javascript
// Guardar pizza en la mesa (SessionStorage)
sessionStorage.setItem("pizza", "🍕");

// Revisar si hay pizza
console.log("En la mesa tengo:", sessionStorage.getItem("pizza"));

// Termina la sesión (cierras pestaña/navegador) y la pizza desaparece automáticamente
```
