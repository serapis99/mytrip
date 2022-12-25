import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Concatenacion

Cuando hablamos de concatenacion es la capacidad de unir cadenas de caracteres formando una sola esto con el fin de agrupar texto fijo con texto variable.

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

El operador que usa en Java para concatenar es el simbolo mas +

```java 
String nombre="ruben";
String apellido="gacha";
System.out.println(nombre+" "+apellido);
```

</TabItem>

<TabItem value="csharp" label="C#">

El operador que usa en C# para concatenar es el simbolo mas(+), aunque tiene otra forma de concatenar cadenas con la **interpolacion de strings**

```csharp 
String nombre = "ruben";
String apellido = "gacha";

// forma normal
Console.WriteLine(nombre + " " + apellido);

// interpolacion de strings
Console.WriteLine($"{nombre} {apellido}");
```

</TabItem>

<TabItem value="vb" label="VB">

```visual-basic

```

</TabItem>

<TabItem value="cpp" label="C++">

Se concatena en salida usando dos menores que seguidos `<<`
```cpp
string nombre="ruben",apellido="gacha";
cout << nombre << " " << apellido << endl;
return 0;
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