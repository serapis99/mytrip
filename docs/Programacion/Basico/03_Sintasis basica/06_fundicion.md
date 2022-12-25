import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Conversion de tipos 

En los lenguajes que tienen tipado fuerte no podemos asignarle un valor de otro tipo por lo tanto tenemos que hacer una conversion de tipos para poder almacenar el valor que tenemos en la variable que tenemos.

## Entre tipos numericos "refundicion" o "casting"

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

para poder pasar de un tipo a otro entre valores numericos se debe colocar entre parentesis al tipo que queremos convertir

```java 
byte edad=-56;
edad=(byte)Math.abs(edad);//se hace refundicion ya que Math.abs devuelve un tipo int
```

</TabItem>

<TabItem value="csharp" label="C#">

para poder pasar de un tipo a otro entre valores numericos se debe colocar entre parentesis al tipo que queremos convertir

```csharp 
sbyte edad = -56;
edad = (sbyte)Math.Abs(edad);
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

## Conversion string a numero

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

En java tenemos que usar la clase de los valores primitivos para lograr convertir un texto a numero aunque este debe ser un numero para que no salga un error.

```java 
String numero="18";

Integer.parseInt(numero);
Double.parseDouble(numero);
Float.parseFloat(numero);
Long.parseLong(numero);
Short.parseShort(numero);
Byte.parseByte(numero);

```

</TabItem>

<TabItem value="csharp" label="C#">

En C# todos los tipos numericos tienen la propiedad Parse que permite convertir de un String al tipo numerico que usa el parse

```csharp 
String edad = "18";
byte.Parse(edad);
int.Parse(edad);
long.Parse(edad);
double.Parse(edad);
float.Parse(edad);
ushort.Parse(edad);
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