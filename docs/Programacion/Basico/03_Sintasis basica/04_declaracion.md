import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Declaracion de variables, Constantes y Comentarios

Algo que debemos aprender es a como se da la instruccion de almacenar un valor en una variable o constante.

# Variables

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

En java se declara una variable indicando primero el tipo de la variable y luego el nombre de la variable que queramos, tambien permite la creacion de multiples variables del mismo tipo en una linea.

```java
// declarar e igualar en diferentes lineas
byte variable1;
variable1=16;

// declarar e igualar en una linea
String variable2="Ruben"

// declarar multiples variables
int variable1,variable2=16,variable3=4;
```

</TabItem>

<TabItem value="csharp" label="C#">

En C# se declara una variable indicando primero el tipo de la variable y luego el nombre de la variable que queramos, tambien permite la creacion de multiples variables del mismo tipo en una linea.

En C# se permite crear variables que se le asignan el tipo al momento de ejecucion para esto usamos la palabra clave **var** aunque una vez que se le da el tipo no se puede modificar en el resto del programa.

```csharp 
// declarar e igualar en diferentes lineas
byte variable1;
variable1=16;

// declarar e igualar en una linea
String variable2="Ruben"

// declarar multiples variables
int variable1,variable2=16,variable3=4;

//uso de la palabra clave var
var variable1=3;
```

</TabItem>

<TabItem value="vb" label="VB">

En visual basic tenemos que indicarle que queremos crear una variable con la palabra reservada `Dim` con eso le indicamos a VB que crearemos una variable 

```visual-basic
' declaracion de variables y asignarle un valor
Dim edad As Integer = 32
Dim letra As Char ='R'
Dim nommbre As String="ruben"
Dim condicion As Boolean = True

' declarar una variable sin asignar datos
Dim estatura As Double

' delcarar multiples variables aunque no se pueden asignar
Dim nota1, nota2, nota3 As Byte
```

</TabItem>

<TabItem value="cpp" label="C++">

En C++ se declara una variable indicando primero el tipo de la variable y luego el nombre de la variable que queramos, tambien permite la creacion de multiples variables del mismo tipo en una linea.

```cpp
// creacion de variables y asignacion
unsigned short edad=15;
int salario=1598798;

// creacion de variables en una linea
unsigned short edad,estatura=15;

// declaracion de variable tipo constructor
unsigned short edad(12);

//declaracion de variable tipo lista
unsigned short estatura{15};
```

:::note Nota
+ Declaracion tipo constructor:
+ Declaracion tipo lista: se creo para evitar la perdida de presicion cuando se cambia de tipo tambien llamado narrowing
:::
</TabItem>

<TabItem value="py" label="Python">

python tiene la capacidad de darle el tipo a la variable dependiendo el valor que guarda en su interior si es de tipo numerico lo guarda como **int** si es de tipo flotante lo guarda como **float**, si es de tipo string lo guarda como **str** y si contiene true o false sera tratada como **bool**

```py 
variable=15
```

</TabItem>

<TabItem value="go" label="Go">

```py 

```

</TabItem>
</Tabs>

## Constantes

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

En java se crean constantes usando la palabra clave **final** antes del tipo de la variable

```java
final byte edad=16;
```
</TabItem>

<TabItem value="csharp" label="C#">

por convencion el nombre de las constantes van en mayusculas y se declaran usando la palabra clave **const** seguido del tipo de variable se debe asignar el valor en el mismo momento que se declara.

```csharp 
const int IVA = 16;
```

</TabItem>

<TabItem value="vb" label="VB">

```visual-basic

```

</TabItem>

<TabItem value="cpp" label="C++">

En c++ tenemos dos formas de declarar variables

```cpp
// forma aconsejada 
const double iva=0.20;

// forma obsoleta ya que se declara una expresion
#define iva 0.20;
```

</TabItem>

<TabItem value="py" label="Python">

En python no existen las constantes lo unico que se hace como nomenclatura es nombrarla toda en mayuscula.

```py 
CONSTANTE=3.1416
```

</TabItem>

<TabItem value="go" label="Go">

```py 

```

</TabItem>
</Tabs>

## comentarios

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

En Java tenemos dos tipos de comentario el de una linea que solo inicia con dos slash **//** o de varias lineas donde se inicia con slash asterisco **/\*** y termina con asterisco slash **\*\\**

```java
//comentario de una linea

/* 
comentario de 
varias lineas
*/
```
</TabItem>

<TabItem value="csharp" label="C#">

En C# tenemos dos tipos de comentario el de una linea que solo inicia con dos slash **//** o de varias lineas donde se inicia con slash asterisco **/\*** y termina con asterisco slash **\*\\**

```csharp 
//comentario de una linea

/* 
comentario de 
varias lineas
*/
```

</TabItem>

<TabItem value="vb" label="VB">

En visual Basic solo se tiene un tipo de comentario de una linea y se usa comilla simple o `alt`+`39`

```visual-basic
'hola esto es un comentario
```

</TabItem>

<TabItem value="cpp" label="C++">

```cpp

//comentario de una linea

/* 
comentario de 
varias lineas
*/

```

</TabItem>

<TabItem value="py" label="Python">

```py 
# comentarios de una linea


"""
Comentarios de varias lineas 
tambien funcionan como documentacion 
del codigo
"""
```

</TabItem>

<TabItem value="go" label="Go">

```go
//comentario de una linea

/* 
comentario de 
varias lineas
*/
```

</TabItem>
</Tabs>