// Guardar una pizza en la nevera (LocalStorage)
localStorage.setItem("pizza", "🍕");

// Revisar si todavía hay pizza
console.log("En la nevera tengo:", localStorage.getItem("pizza"));

// Vaciar la nevera
localStorage.removeItem("pizza");
console.log("La nevera quedó vacía");
