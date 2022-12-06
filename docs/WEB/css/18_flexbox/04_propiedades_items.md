# Propiedades de los items

**flex**: es un shorthand que engloba las sigientes propiedades:

+ **flex-grow**: Establece que hacer cuando hay espacios sobrante. cuantas divisiones coge el elemento. el valor es un entero desde 0 hasta n o auto.

Ejemplo: 

para entender lo que hace si tenemos 4 cajas de 50px y un contenedor de 400px sabemos que las 4 cajas ocuparan 200px y le estamos indicando que la parte sobrante la divida en la suma de los valores de **flex-grow** que existan. en este caso 3 y que se le de el valor de esa divicion multiplicado por el valor del flex-grow que contiene el item en este caso uno a la segunda caja y dos a la tercera caja.
```css
.flex-container{
    display:flex;
    width:400px;
}

.flex-item{
    width:50px;
    height:50px;
}

.flex-item:nth-child(2){
    flex-grow:1;
}

.flex-item:nth-child(3){
    flex-grow:2;
}

/**para entender lo que hace  */
```
+ **flex-shrink** establece que hacer cuando no hay espacio suficiente. cuantas divisiones pierde el elemento. el valor es un entero desde 0 hasta n.

Ejemplo:

este hace un calculo de cuantos pixeles tiene que entregar cada elemento si por ejemplo se tienen 4 cajas de 200px en un contenedor de 400px cada una debe perder 100px, pero al darle un flex-shrink:2 a alguna caja le indicamos que pierda una cantidad mayor en si creamos virtualmente mas elementos en este caso ya no tendriamos 4 elementos sino 5 y al realizar la divicion vemos que a cada elemento le tocan perder 80px y al elemento que le dimos flex-shrink le tocaria perder 80px de el y 80px del elemento virtual. 

+ **flex-basis**: Establece cuanto tiene que ocupar el item antes de encojer o extenderse. flex basis prevalece ante width si el main-axis es horizontal o ante height si el main-axis es vertical. el valor es un entero desde 0 hasta n.

```css
flex-item{
    flex-basis:200px;
}
```

los valores de flex son: lo ideal es usar el flex por rendimiento y va flex-grow flex-shrink flex-basis. 
+ por defecto es: 0 1 auto;
+ auto: 1 1 auto;
+ none: 0 0 auto;

**Order**: establece que orden ocupara el elemento en el contenedor flex. el valor es el peso respecto a los valores que tengan los otros elementos. por defecto es 0. funciona similar a **z-index**


```css
flex-item:nth-child(1){
    order:1;
}
flex-item:nth-child(2){
    order:2;
}
flex-item:nth-child(3){
    order:1;
}
```
