# absoluted

partiendo de dos cajas en el html podemos ver el funcionamiento de position: absoluted.

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
```
//lo primero que hay que observar es que al colocar position:absoluted el objeto pierde sus medidas por defecto, esto se puede cambiar dandole medidas al objeto
```css
.box-1{
    position:adsoluted;
    left:100px;
    bottom:100px;
}

.box-2{
    position:relative;
    left:100px;
    top:50px;
}
```

por otro lado se debe tener presente si el objeto que le estamos aplicando adsoluted tiene un padre que este posicionado ya que la posicion que tomaria nuestro objeto estaria dada con respecto a este objeto posicionado.