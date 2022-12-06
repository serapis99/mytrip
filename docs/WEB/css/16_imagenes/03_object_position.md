# object-position

coloca la imagen cuando esta no se muestra completa en el contenedor.

se debe usar con `object-fit`.

puede recibir dos valores uno para moverse en "x" y el otro para "y". los valores son:

+ left top
+ left center
+ left bottom
+ right top
+ right center
+ right bottom
+ center top
+ center center
+ center bottom
+ x% y%
+ xpos  ypos

```css
.img{
    width: 250px;
    height:450px;
    object-fit: cover;
    object-position:center
}
```