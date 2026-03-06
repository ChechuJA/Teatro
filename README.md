# 🎭 Nova-tro-s - Teatro de Familias

> **"Hacemos lo que podemos"**

Sitio web de **Nova-tro-s**, un grupo de teatro formado por familias que realizan actuaciones educativas para niños de Educación Infantil.

## 📖 Sobre Nova-tro-s

**Nova-tro-s** es un proyecto teatral familiar donde padres y madres "novatos" en teatro crean obras educativas y divertidas para los más pequeños. El nombre combina "novatos" y "teatro" representando nuestro espíritu: no somos profesionales, pero ponemos todo nuestro corazón en cada actuación.

## ✨ Descripción

Este sitio web organiza todas nuestras actuaciones por curso escolar y trimestre. Incluye:

- **📅 Cursos Escolares**: Organizados por año académico (ej: 2025-2026)
- **🎬 Tres Trimestres por Curso**: Cada año tiene tres actuaciones trimestrales
- **📁 Materiales**: Cada trimestre incluye guiones con emojis, PDFs, imágenes y recursos
- **🤖 Chatbot interactivo**: Asistente virtual que responde preguntas sobre las obras
- **📱 Diseño responsive**: Funciona perfectamente en móvil y escritorio

## 🎯 Características

### Chatbot de Consultas

El chatbot puede responder preguntas como:
- "¿Cuándo es el teatro del primer trimestre?"
- "¿Cuántos participantes hay?"
- "¿Cuál es el título de la obra del segundo trimestre?"
- "¿Dónde se realiza?"
- "¿A qué hora es?"

## 🗂️ Estructura de Carpetas

El repositorio está organizado por cursos escolares y trimestres:

```
2025-2026/
├── README.md
├── Trimestre1/
│   └── README.md
├── Trimestre2/
│   ├── index.html          # Página web de la obra
│   ├── README.md           # Información y reparto
│   ├── teatro.md           # Guion con emojis 🐧🐝🌳
│   ├── teatro.pdf          # PDF para imprimir
│   └── [imágenes]          # Fotos y recursos
└── Trimestre3/
    └── README.md
```

Cada carpeta de trimestre contiene:
- 📖 **Versión web** (index.html) - Visualización interactiva con emojis
- 📋 **README.md** - Información completa, reparto y materiales
- 📄 **teatro.md** - Guion en Markdown con emojis por personaje
- 📄 **teatro.pdf** - Versión para imprimir (preferente)
- 📸 **Imágenes** - Fotos de actuaciones y ensayos
- 🎵 **Enlaces** - Música y coreografías

### Curso Actual: 2025-2026

- **Trimestre 1** (Sep-Dic): Próximamente...
- **Trimestre 2** (Ene-Mar): **🌍 Los Guardianes del Planeta** ✅
- **Trimestre 3** (Abr-Jun): Próximamente...

## 🚀 Despliegue en GitHub Pages

Este sitio está configurado para GitHub Pages:

1. Ve a la configuración del repositorio
2. Navega a "Pages" en la barra lateral
3. En "Source", selecciona la rama `main`
4. Haz clic en Save

El sitio estará disponible en: `https://[usuario].github.io/Teatro/`

## 💻 Desarrollo Local

Para probar el sitio localmente:

1. Clona el repositorio
2. Abre `index.html` en un navegador
3. O usa un servidor local:
   ```bash
   python -m http.server 8000
   ```
   Luego abre `http://localhost:8000`

## 📁 Archivos Principales

- `index.html` - Página principal
- `styles.css` - Estilos y diseño responsive
- `chatbot.js` - Lógica del chatbot y datos de obras
- `.github/copilot-instructions.md` - Instrucciones para Copilot

## 🎭 Filosofía

> "Hacemos lo que podemos"

Este proyecto valora:
- ❤️ La participación familiar
- 🌟 El esfuerzo sobre la perfección
- 📚 La educación en valores
- 😊 La diversión y los recuerdos
- 🤝 El trabajo en equipo

---

**Nova-tro-s** - *Hacemos lo que podemos* 🎭

Hecho con ❤️ por familias para niños
