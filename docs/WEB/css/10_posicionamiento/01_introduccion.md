# Posicionamiento

La propiedad **position** nos permite posicionar los elementos. hay algunos conceptos que se deben conocer para entender **position**.

1. **Flujo de renderizado**: por norma general los elementos se dibujan de izquierda a derecha y de arriba abajo. El punto 0,0 de los elementos, por norma general, es la esquina superior izquierda.
2. **Espacio reservado**: es el espacio que tienen un elemento asignado en el navegador.
3. **Elemento posicionado**: esto significa que el elemento tiene la propiedad position con un valor distinto de **static**, que es el valor que tiene esta propiedad por defecto.
4. **stackin context**: contexto de apilamiento. es el orden en el que se apilaran las cajas que se superponen. 
5. Al posicionar un elemento se habilitan 5 propiedades que podemos utilizar para mover los elementos en los 3 ejes.
    + **top**: el elemento se movera desde la parte superior la distancia que le hayamos indicado.
    + **right**: el elemento se movera desde la parte derecha la distancia que le hayamos indicado.
    + **bottom**: el elemento se movera desde la parte inferior la distancia que le hayamos indicado.
    + **left**: el elemento se movera desde la parte izquierda la distancia que le hayamos indicado.
    + **z-index**: nos permite mover el elemento en el contexto de apilamiento (eje z)

**NOTA**: si a un elemento le declaramos la propiedad top y/o left su opuesto no funcionara igual pasa con la propiedades bottom y/o right. 

los posibles valores que le podemos dar a position son:

1. **static**: Es el valor que tiene por defecto un elemento, con este valor el elemento NO ESTA POSICIONADO  y por lo cual no podremos moverlo.
2. **relative**: El elemento mantendra su posicion y medidas en el flujo de renderizado y mantendra su espacio reservado. si lo movemos lo hara usando su posicion en el html como punto de referencia.
3. **absolute**: el elemento perdera sus medidas y su espacio reservado. si lo movemos usara el elemento padre posicionado como referencia. si no tiene ninguno, usara el elemento html de referencia.
4. **fixed**: el elemento perdera sus medidas y su espacio reservado. SI lo movemos usara el elemento html de referencia y ademas se quedara fijo en esa posicion aunque hagamos scroll.