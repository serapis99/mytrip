# repetir degradados

algo que se tiene que tener en cuenta es que por defecto estamos repitiendo un patron por lo tanto podemos crear figuras con patrones de degradados de la siguiente forma.

```css
.box{
    width:250px;
    height:250px;
    border:3px solid #000;
    margin: 2em auto;
    background-image: linear-gradient(45deg, blue 50%, red 50%);
    background-size:25px 25px;
}
```

cuando queremos repetir un degradado en forma progresiba podemos usar **repeating-linear-gradient** donde debemos decirle el patron que queremos que repita.

**NOTA**: este degradado es de cortes solidos si no se quieren cortes solidos solo se deja un valor por color
```css
.box{
    width:250px;
    height:250px;
    border:3px solid #000;
    margin: 2em auto;
    background-image: repeating-linear-gradient(45deg, 
    red 0, /**punto inicial del primer color */
    red 10px, /**punto final del primer color */
    blue 10px,/**punto inicial del segundo color */
    blue 20px /**punto final del segundo color */
    );
}
```

tambien se puede repetir degradados radiales usando el **repeating-radial-gradient**

```css
.box{
    width:250px;
    height:250px;
    border:3px solid #000;
    margin: 2em auto;
    background-image: repeating-radial-gradient(circle 20px, 
    red 0, /**punto inicial del primer color */
    red 10px, /**punto final del primer color */
    blue 10px,/**punto inicial del segundo color */
    blue 20px /**punto final del segundo color */
    );
}
```