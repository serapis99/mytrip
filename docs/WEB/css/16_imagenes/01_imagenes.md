# imagenes

NO existen propiedades para imagenes en css

---
1. Imagenes responsive. En el archivo base se recomienda poner esta regla.
```css
img{
    max-width:100%;
}
```
---
2. las imagenes por defecto son elementos **inline**, esto causa un espacio por debajo debido a su line-height, se puede solucionar de dos formas.
   
+ display:block

```css
img{
    display:block;
}
```
+ line-height:0 al contenedor

```css
.img-container{
    line-height:0;
}
```
---
3. centrado horizontal

+ imagen con display block
```css
img{
    display:block;
    margin-left:auto;
    margin-right:auto;
}
```
+ text-aling: center al contenedor imagen

```css
.img-container{
    text-aling:center;
}
```
---

4. centrado vertical:
   
+ flexbox(la mejor opcion)

```css
.img-container{
    display:flex;
    align-items:center;
}
```

+ vertical-align:middle. a la imagen y al texto

```css
/**establecer en el contenedor el modo table */
.img-container{
    display:table;
}

/** centrar tanto la imagen como el texto*/
.img-container img,
.img-container span{
    vertical-align:middle;
}

/** trabaja el texto como celda*/
.img-container p,
.img-container span{
    display:table-cell;
}
```


