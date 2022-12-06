# MatchMedia

nos permite tener un mayor control en saber las medidas de la pantalla visual que tienen el navegador para esto usamos la API y nos sirve para tener una pagina responsible.

mql=window.matchMedia(mediaQueryString);

mql viene de media query list, que es el objeto que se crea con el metodo **marchMedia()** y mediaQueryString es cualquier medua query valida en css.

ejemplo:

```javascript
const mql=matchMedia('(min-width:400px)')

const applyMatchMedia=mql=>{
    //se recuerda que no es recomendado usar estilo en linea
    mql.matches?
    document.body.style.backgroundColor="red":
    document.body.style.backgroundColor="royalblue";
}

//evento cada vez que se redimenciona el tamaño
addEventListener('resize',()=>{applyMatchMedia(mql)})
//cuando el DOM esta cargado
addEventListener('DOMContentLoaded',()=>{applyMatchMedia(mql)})
```