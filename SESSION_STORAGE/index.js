// Guardar pizza en la mesa (SessionStorage)
sessionStorage.setItem("pizza", "🍕");

// Revisar si hay pizza
console.log("En la mesa tengo:",sessionStorage.getItem("pizza"));

// Termina la sesión (cierras pestaña/navegador) y
//  la pizza desaparece automáticamente
