# 💡 Tip de Programación: Copiar `texto` al portapapeles

## 📌 Código de ejemplo
```javascript
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
  copyToClipboard("Texto copiado ✅");
```

## 📚 Explicación

usa la API del navegador para copiar cualquier texto al portapapeles del usuario.