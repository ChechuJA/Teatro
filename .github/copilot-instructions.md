# Instrucciones para GitHub Copilot - Teatro Nova-tro-s

## 📋 Sobre el Proyecto

**Nova-tro-s** es un proyecto de teatro educativo para familias que realizan actuaciones trimestrales para niños de Educación Infantil. El nombre combina "novatos" y "teatro" bajo el lema: "Hacemos lo que podemos".

## 🗂️ Estructura del Proyecto

```
Teatro/
├── index.html              # Página principal del sitio web
├── styles.css              # Estilos globales
├── chatbot.js             # Bot de información sobre las obras
├── README.md              # Documentación principal
├── CNAME                  # Configuración de dominio personalizado
├── .github/
│   └── copilot-instructions.md  # Este archivo
└── [CURSO-ESCOLAR]/       # Ej: 2025-2026/
    ├── README.md          # Información general del curso
    └── Trimestre[N]/      # Ej: Trimestre1/, Trimestre2/, Trimestre3/
        ├── index.html     # Página web de la obra (con emojis visuales)
        ├── README.md      # Información, reparto y materiales
        ├── teatro.md      # Guion en Markdown con emojis 🐧🐝🌳
        ├── teatro.pdf     # PDF generado desde teatro.md (PREFERENTE)
        └── [imágenes]     # Fotos y recursos visuales
```

## 🎯 Convenciones y Reglas

### 1. **Organización de Obras Teatrales**

Cada trimestre tiene su propia carpeta con:
- **index.html**: Versión web interactiva con emojis
- **README.md**: Información completa (reparto, fechas, materiales)
- **teatro.md**: Guion con emojis para identificar personajes
- **teatro.pdf**: Versión para imprimir (generada con extensión "Markdown PDF")

### 2. **Formato del Guion (teatro.md)**

✅ **Usar emojis** al inicio de cada personaje para facilitar identificación:
```markdown
**🌍 Madre Tierra - Vero:**
Texto del diálogo...

**🐧 Pingüino 1 - Chechu:**
¡Tengo frío!

**🐝 Abeja 1 - Espe:**
Zumbando voy...
```

#### Emojis Comunes por Tipo de Personaje:
- 🌍 Madre Tierra / Narradores
- 🌳 Árboles
- 🐺 Lobos
- 🐆 Linces
- 🦜 Aves (Guacamayos, etc.)
- 🐟 Peces
- 🐊 Cocodrilos
- 🐧 Pingüinos
- 🐻‍❄️ Osos polares
- 🐝 Abejas (🐝 Abeja, 👑 Abeja Reina)
- 🧒 Niños/Protagonistas
- 👨‍🌾 Personajes humanos (Apicultor, etc.)

### 3. **Materiales Disponibles - Orden de Preferencia**

En README.md y páginas web, listar en este orden:
```markdown
## 📁 Materiales disponibles

- 📖 **[Ver obra completa](index.html)** - Versión web con emojis
- 📋 **Información y reparto** - Disponible en este documento
- 📄 **[Descargar guion (PDF)](teatro.pdf)** - **PREFERENTE para imprimir**
- 📸 **Imágenes** - *Próximamente*
- 🎵 **Música y coreografías** - *Próximamente*
```

**⚠️ Importante:** El PDF debe aparecer antes que el .md como opción de descarga preferente.

### 4. **Información de Reparto**

El reparto debe incluir:
- Número de orden
- Nombre del participante (adulto/familia)
- Personaje asignado

Formato tabla Markdown:
```markdown
| # | Participante | Personaje |
|---|--------|-----------|
| 1 | Espe | Abeja 1 |
| 2 | Steph | Apicultor |
```

### 5. **Estructura de Obras**

Las obras típicamente tienen:
- **3 Actos** (duración ~20 minutos)
- **Zonas temáticas** (Bosque, Agua, Hielo, etc.)
- **Coreografías** específicas por zona/acto
- **Mensaje educativo** claro para los niños

### 6. **Generación de PDF**

Cuando se actualice `teatro.md`:
1. Usar la extensión "Markdown PDF" de VS Code
2. Clic derecho → "Markdown PDF: Export (pdf)"
3. Esto genera `teatro.pdf` con los emojis incluidos

### 7. **Correcciones Ortográficas**

✅ **Tildes obligatorias en:**
- Preguntas: qué, cómo, dónde, cuándo, quién
- Verbos: está, están, estáis, sabéis, oís
- Sustantivos: árbol/árboles, aquí, raíz/raíces

### 8. **Lenguaje y Tono**

- **Público objetivo:** Niños de Educación Infantil (3-5 años)
- **Tono:** Didáctico, ágil, participativo y divertido
- **Lenguaje:** Simple y directo
- **Interacción:** Incluir momentos de participación del público (ej: repetir frases)

## 🛠️ Tareas Comunes

### Crear Nueva Obra (Nuevo Trimestre)

1. Copiar estructura de un trimestre existente
2. Actualizar fechas, título, reparto
3. Escribir guion en `teatro.md` con emojis
4. Generar `teatro.pdf`
5. Actualizar `README.md` con información
6. Crear `index.html` si se desea versión web
7. Actualizar página principal (`/index.html`) con nueva obra

### Actualizar Reparto

1. Editar tabla de reparto en `README.md`
2. Buscar y reemplazar nombres en `teatro.md`
3. Verificar consistencia en `index.html`
4. Regenerar `teatro.pdf`

### Añadir Materiales

- Imágenes → carpeta del trimestre correspondiente
- Música → enlazar en README.md
- Coreografías → documentar en README.md con enlaces a YouTube

## 📝 Notas Importantes

- Los actores son **adultos (familias)**, no niños
- El público son **niños de infantil**
- Mantener coherencia entre todos los archivos (README, teatro.md, index.html)
- El PDF es la versión preferente para distribución
- La web (index.html) es para lectura online con emojis visuales
- El .md es para edición, pero no para distribución pública

## 🎭 Filosofía del Proyecto

> "Hacemos lo que podemos"

Este proyecto valora:
- La participación familiar
- El esfuerzo y dedicación sobre la perfección
- La educación de valores a través del teatro
- La diversión y los recuerdos compartidos
- La creatividad y el trabajo en equipo

---

**Última actualización:** Marzo 2026
