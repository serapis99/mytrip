import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Manejo de String

dependiendo el lenguaje los strings seran datos primitivos o clases y con esto presente debemos que podemos hacer con strings en un lenguaje o en otro.

<!-- ****************************** Datos del lenguaje ******************************** -->

## Datos en el lenguaje

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

En Java los string son clases lo que hace que tenga **metodos** se pueden ver todos los metodos [aqui](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/lang/String.html) y se declara de una forma parecida a una variable.


```java
//crear un nuevo string
String Nombre="ruben";
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp 

```

</TabItem>

<TabItem value="vb" label="VB">

```visual-basic

```

</TabItem>

<TabItem value="cpp" label="C++">

```cpp

```

</TabItem>

<TabItem value="py" label="Python">

```py 

```

</TabItem>

<TabItem value="go" label="Go">

```py 

```

</TabItem>
</Tabs>

<!-- *************************** tamaño string *********************************** -->

## saber el tamaño del string

Una de las actividades que mas se hace es saber el tamaño de un string ya sea para hacer validaciones o solo para saber si tiene algun contenido.

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

```java
Nombre.length();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp 

```

</TabItem>

<TabItem value="vb" label="VB">

```visual-basic

```

</TabItem>

<TabItem value="cpp" label="C++">

```cpp

```

</TabItem>

<TabItem value="py" label="Python">

```py 

```

</TabItem>

<TabItem value="go" label="Go">

```py 

```

</TabItem>
</Tabs>

<!-- ****************************** caracter en la posicion x ******************************** -->

## saber que caracter hay en una posicion

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

```java
Nombre.chartAt(2);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp 

```

</TabItem>

<TabItem value="vb" label="VB">

```visual-basic

```

</TabItem>

<TabItem value="cpp" label="C++">

```cpp

```

</TabItem>

<TabItem value="py" label="Python">

```py 

```

</TabItem>

<TabItem value="go" label="Go">

```py 

```

</TabItem>
</Tabs>

<!-- ************************************ substrings ************************** -->

## substrings

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

Para extraer un substrings se usa el metodo substring dandole la posicion inicial y la pocicion final. 

```java
Nombre.substring(2,5);
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp 

```

</TabItem>

<TabItem value="vb" label="VB">

```visual-basic

```

</TabItem>

<TabItem value="cpp" label="C++">

```cpp

```

</TabItem>

<TabItem value="py" label="Python">

```py 

```

</TabItem>

<TabItem value="go" label="Go">

```py 

```

</TabItem>
</Tabs>

<!-- ********************************comparacion de strings ****************************** -->

## comparar Strings

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

```java
Nombre.equals("ruben"); //compara si son iguales los dos strings
Nombre.equalsIgnoreCase("RuBen"); //compara si sson iguales los dos strings ignorando si las letras son mayusculas o minusculas
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp 

```

</TabItem>

<TabItem value="vb" label="VB">

```visual-basic

```

</TabItem>

<TabItem value="cpp" label="C++">

```cpp

```

</TabItem>

<TabItem value="py" label="Python">

```py 

```

</TabItem>

<TabItem value="go" label="Go">

```py 

```

</TabItem>
</Tabs>