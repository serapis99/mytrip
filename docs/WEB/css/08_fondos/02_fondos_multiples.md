# fondos multiples

todas las propiedades de background pueden admitir varios valores separados por comas para aplicar estos valores a cada fondo que cargamos, si se deja un solo valor se aplicara este a todos los fondos.

```css
.bg-multiple{
    background-image: url(imagen1.png), url(imagen2.png);
    background-size: cover, contain;
    background-repeat: no-repeat;
    background-position: bottom right, center;

}
```