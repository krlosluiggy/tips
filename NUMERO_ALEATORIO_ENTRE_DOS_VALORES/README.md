# 💡 Tip de Programación: Generar un número aleatorio entre dos valores

## 📌 Código de ejemplo
```javascript
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandom(10, 50)); // Ejemplo: 37.
```

## 📚 Explicación

`Math.random()` genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
