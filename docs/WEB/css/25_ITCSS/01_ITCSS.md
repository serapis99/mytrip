# ITCSS (Inverted Triangle Cascading Style Sheets)

es una forma de organizar el codigo CSS repartiendolas en carpetas y tienen un orden al momento de ser invocadas.

+ ITCSS
  1. **Settings:** declaramos variables (no genera css)
  2. **Tools:** funciones o mixings (no genera css)
  3. **Generic:** codigo generico y afecta a toda la pagina (normalize)
  4. **Elements:** tags o etiquetas del html (No elementos anidados)
  5. **Objects**: clases reutilizables en cualquier lugar
  6. **Components**: bloques bem especificos, piezas completas que pueden trabajar de forma autonoma
  7. **Utilities**: son las importaciones generalmente