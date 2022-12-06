# Funciones flecha

son funciones que se paresen a la tipo expresion, pero mas cortas ya que nos ahorra usar algunas palabras claves.

Ejemplo:

```javascript
const miFuncion=(a,b)=>{a+b};

// cuando es solo una linea se puede dejar sin llaves porque se entiende que lo que se quiere devolver esta en esa linea.
const miFuncion2=(a,b)=>a+b;

// cuando son varias lineas si se debe usar el return

const miFuncion3=(a,b)=>{
    c=a;
    d=b;
    return (c+d);
}

// si es solo un parametro no es necesario usar los parentesis.
const miFuncion4=a=>`mi nombre es: ${a}`;

```