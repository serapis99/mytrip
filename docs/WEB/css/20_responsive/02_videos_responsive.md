# videos responsive

La forma más común es hacer un padding-bottom de 56.25%, este numero es el resultado de la operacion (9/16) es decir un formato 16:9, esto da como resultado 0.5625 si lo multiplicamos por 100 el resultado es 56.25


HTML:

```HTML
<div class="container">
    <div class="video">
        <iframe src=""></iframe>
    </div>
</div>
```
CSS:

```CSS
.container{
    margin-left:auto;
    margin-right:auto;
    min-width:320px;
    max-width:1400px;
}

.video{
    height:0;
    padding-bottom:56.25%;
    position:relative;
}

.video iframe{
    position:absolute;
    width:100%;
    height:100%;
}
```