# currentColor

Es una palabra clave que se puede usar en lugar de cualquier valor de color y usara el valor ya sea establecido o heredado en la propiedad color.

en otras palabra es una variable que detecta la propiedad **color** mas cercana ya sea por un padre o en su propio contenedor. 

```css 
body{
    background-color:MediumOrchid;
    color:#333;
}

.main{
    background-color:currentColor;
}
```