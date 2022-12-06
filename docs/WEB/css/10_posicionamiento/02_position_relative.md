# relative

partiendo de dos cajas en el html podemos ver el funcionamiento de position: relative.

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
```

```css
.box{
    width:100px;
    height:100px;
}

.box-1{
    position:relative;
    left:100px;
    bottom:100px;
}

.box-2{
    position:relative;
    left:100px;
    top:50px;
}
```