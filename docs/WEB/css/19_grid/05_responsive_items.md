# responsive items

## minmax()

Recibe dos parametros (valores) para establecer el minimo y el maximo que pueden tener los items.

ejemplo:

```css
.grid-container{
    grid-template-columns:repeat(2, minmax(100px,1fr));
}
```

+ **min-content**: minimo necesario en funcion del contenido.

```css
.grid-container{
    grid-template-columns:repeat(2, minmax(min-content,1fr));
}
```

+ **max-content**: maximo necesario en funcion del contenido, cuando no queremos que se rompa el contenido y lo mantenga en una linea.

```css
.grid-container{
    grid-template-columns:repeat(2, minmax(max-content,1fr));
}
```
+ **auto-fill**: crea tantos grid-items vacios como quepan en el viewport respetando las medidas.

```css
.grid-container{
    grid-template-columns:repeat(auto-fill, minmax(max-content,1fr));
}
```

+ **auto-fit**: Elimina los grid-items vacios que no se esten ocupando.

```css
.grid-container{
    grid-template-columns:repeat(auto-fit, minmax(max-content,1fr));
}
```