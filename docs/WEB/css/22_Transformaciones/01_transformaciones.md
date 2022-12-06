# transform

nos permite modificar el espacio de coordenadas de un elemento:

posee las siguientes funciones:
+ **rotate**: rota un elemento 2D en sentido de las manillas de reloj `rotate(deg)`
  + **rotateX**: rota en x `rotateX(deg)`
  + **rotateY**: rota en y `rotateY(deg)`
  + **rotateZ**: rota en z `rotateZ(deg)`
+ **scale**: Especifica una operacion de escalado 2D `scale(sx[, sy])` => scale(2.5, 4)
  + **scaleX**: escala en x scaleX(2.5)
  + **scaleY**: escala en y scaleY(4)
+ **skew**: (No usar) usar los hijos, y se trata en inclinar el elemento
  + **skewX**: skewX(deg) skewX(90deg)
  + **skewY**: skewY(deg) skewY(90deg)
+ **translate**: traslacion en 2D `translate(tx[, ty])` tanto en x como en y.
  + translateX: translateX(50px)
  + translateY: translateY(50px)

```css
div:active{
    transform:rotateZ(90deg);
    transition:transform 4s 0s linear;
}
```