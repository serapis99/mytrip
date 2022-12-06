# Complejidad y Tratabilidad

El factor mas predominante que delimita lo que se puede resolver en un tiempo razonable de lo que no lo es suele ser el **algoritmo** elegido para resolver el problema y no la potencia de calculo.

El programador es responsable de usar los recursos del computador de la forma mas eficiente posible.

Factores que influyen en la eficiencia del algoritmo son:

1. **El tamaño**: hace referencia a la cantidad de datos de entrada
2. **El contenido**: Hace referencia a que datos estamos tratando estos pueden hacer oscilar la eficiencia del algoritmo entre el valor minimo y el valor maximo.
3. **El computador**: Se refiere al procesamiento que puede usar el algoritmo.

## Casos al momento de analizar un algoritmo

1. **Mejor caso**: analisis con los datos de entrada que hacen que el algoritmo tarde menos tiempo. aporta el limite minimo.
2. **Peor caso**: analisis con los datos de entrada que hacen que el algoritmo tarde mas tiempo. aporta el limite maximo y es el mas critico y mas importante.
3. **Caso Promedio**: analisis con los datos de entrada que se dan con mayor frecuencia. es mas realista pero es el mas complejo de calcular analiticamente aunque se puede aproximar experimentalmente.

## Criterio Asintotico
**Se ignorara al computador y al compilador.**

1. Analisis independiente de la maquina y el lenguaje. un programa tan solo es una implementacion concreta de un algoritmo.
2. Para tamaños suficientemente grandes, el tiempo de ejecucion depende mas del algoritmo que de la maquina o el lenguaje. Diferentes implementaciones solo se diferencian en una constante multiplicativa.
3. El analisis se realizara tanto en tiempo como en espacio(memoria utilizada.) son contrapuestos

## Complejidad Asintotica

tambien llamadas **Notacion asintotica, analisis asintotico o criterio Asintotico**

Asignar un orden de complejidad a cada algoritmo solo segun el tamaño de su problema(tamaño de los datos de entrada).

Ejemplos: longitud de un vector, cantidad de elementos de una coleccion, longitud de un fichero, dimensiones de una matriz, magnitud de los numeros, etc.

## Calculo de la eficiencia

A cada instruccion de un algoritmo se le asigna un coste.

1. **Instruccion basica**: Que no depende del ta del problema(asignacion, I/O,etc.): Coste costante
2. **Secuencia de instrucciones**: el coste sera el de la instruccion conste maximo (alternativa: suma).
3. **Condicionales**: de las dos opciones, la que tenga mayor coste.
4. **Iteraciones**: Se multiplica el numero maximo de iteraciones por el coste del bucle.
5. **Instruccion critica**: Instruccion que mas veces se repite dentro de un programa, para tamaños de programa suficientemente grandes, el resto del programa perdera importancia frente al coste de repetir la instruccion critica, por muy elemental que sea.

```python
def EJEMPLO(problema) return resultado: #f(n^2) 
    variable=valor # f(1)
    resultado=invocar-metodo(problema) # f(n)
    
    if resultado == 0: #f(n^2)
        mostrar-error-pantalla() # f(1)
    else

        for i in resultado: #f(n*n) = f(n^2)
            otra = metodo(elemento) # f(1)
            variable=variable+1 # f(1)

            if otra > variable:#f(n)
                mostrar-aviso-pantalla() # f(1)
            else
                otro-metodo(otra)#f(n)

    return resultado
```

### Matices

1. Con constantes multiplicativas muy grandes, para problemas con tamaños pequeños, es mejor usar algoritmos mas ineficientes.
2. Para funciones que se van a usar pocas veces, no importa usar algoritmos mas ineficientes si son mas rapidos de desarrollar y mantener
3. la ganancia en tiempo suele ser a costa del uso del espacio ocupado. la memoria es un recurso muy limitante, mas que el tiempo, luego hay que buscar un equilibrio.

### Ordenes de complejidad

De menor coste al mayor coste.

|Codigo|Descripccion|
|---|---|
|O(1)| Orden constante|
|O(log(n))|Orden Logaritmico|
|O(n)|Orden Lineal|
|O(n*log(n))|Orden N-Logaritmico|
|O(n^2)|Orden Cuadratico|
|O(n^a)|Orden polinomico|
|O(a^n)|Orden Exponencial|
|O(a!) | Orden Factorial|
|O(n^n)|Orden Potencial-Exponencial|

### Tratabilidad

1. **Problemas Indecidibles**: Son los que no poseen un algoritmo. No es que no se conozca aun, sino que no existe algoritmo.
2. **Problemas Decidibles**: Posee algoritmos, por lo que se pueden resolver mediante un programa (aunque aun no lo conozcamos)
   + **Problemas Tratables (clase P)** Orden Polinomico o inferior.
   + **Problemas intratables (clase NP)**: Orden exponencial o superior
   + **Clase NP-Completa (NP-Duro)**: son de la clase NP pero no de la clase P. (No se conoce solucion polinomica).

