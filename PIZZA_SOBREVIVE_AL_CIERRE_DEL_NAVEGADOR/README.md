“¿Tu pizza sobrevive al cierre del navegador? 🍕🤔”

✨ Explicación con ejemplo

LocalStorage = Pizza guardada en la nevera 🥶
→ Cierras el navegador, vuelves mañana… ¡y tu pizza sigue ahí!

SessionStorage = Pizza en la mesa 🍽️
→ Cierras la pestaña, te levantas… ¡y adiós pizza!

🧑‍💻 Ejemplo en código (LocalStorage – Pizza)

```javascript
// Guardar una pizza en la nevera (LocalStorage)
localStorage.setItem("pizza", "🍕");

// Revisar si todavía hay pizza
console.log("En la nevera tengo:", localStorage.getItem("pizza"));

// Vaciar la nevera
localStorage.removeItem("pizza");
console.log("La nevera quedó vacía");
```