# clip_path

Es una mascara que oculta partes de una caja

+ circle(): dibuja un circulo, puede tener una medida fija, circle(100px) o podemos especificar un centro con `at`, circle(100px at medidaX medidaY | palabraClaveX palabraClaveY).
```css
.box{
    width:400px;
    height:400px;
    clip-path:circle(100px);
}

.box2{
    width:400px;
    height:400px;
    clip-path:circle(100px at 20%);
}

.box3{
    width:400px;
    height:400px;
    clip-path:circle(100px at 0 0);
}

.box3{
    width:400px;
    height:400px;
    clip-path:circle(100px at top left);
}
```
+ ellipse(): dibuja una elipse, funciona igual que el circulo, pero en este caso podemos especificar 2 centros, el horizontal y el vertical.
```css
.box{
    width:400px;
    height:400px;
    clip-path:ellipse(100px 50px);
}

.box2{
    width:400px;
    height:400px;
    clip-path:ellipse(100px 50px at 0 0);
}
```
+ inset(): dibuja un borde transparente por dentro de la caja.
  + inset(all | y x | top x bottom| top left bottom right)
  + Existe la opcion de redondear las esquinas, para ello despues de los valores de inset pondremos round `inset(*** round all | top-left bottom-right top-right bottom-left | top-left top-right & bottom-left bottom-right top-left top-right bottom-right bottom-left)

**NOTA**: recordar el modelo caja ya que funciona igual en `round` como en el propio `inset`.
```css
.box{
    width:400px;
    height:400px;
    clip-path:inset(20px);
}

.box2{
    width:400px;
    height:400px;
    clip-path:inset(20px 30px);
}

.box3{
    width:400px;
    height:400px;
    clip-path:inset(20px 30px 40px);
}

.box3{
    width:400px;
    height:400px;
    clip-path:inset(20px 30px 40px 10px);
}

.box5{
    width:400px;
    height:400px;
    clip-path:inset(20px 30px 40px round 10px);
}

.box6{
    width:400px;
    height:400px;
    clip-path:inset(20px 30px 40px round 10px 20px);
}
```
+ polygon(): especifica una serie de puntos (minimo 3) para definir la zona visible siendo el punto 0 0 la esquina superior izquierda.

los puntos se especifican por parejas de ejeX y ejeY separados por comas

```css
/**triangulo */
.box{
    width:400px;
    height:400px;
    clip-path:polygon(50% 0, 0 100%, 100% 100%);
}
```

[generador de clip-path](https://bennettfeely.com/clippy/)