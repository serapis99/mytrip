import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Operadores de Incremento o Decremento

los operadores de incremento o decremento nos permite de una forma abreviada incrementar el valor de una variable o decrementarla. 

En algunos lenguajes permite el **pre** y el **post** esto hace referencia en que momento se hara el incremento el **pre** hace el incremento antes de ejecutar la sentencia y el post la realiza despues de ejecutar la sentencia.

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

+ incrementar en uno: ++
+ decrementar en uno: --
+ incrementar en n: +=
+ decrementar en n: -=

```java
byte edad=16;
System.out.println(edad++); //post-incremento
System.out.println(edad--); //post-decremento
System.out.println(--edad); //pre-decremento
System.out.println(++edad); //pre-incremento
System.out.println(edad+=3); //incrementar en 3
System.out.println(edad-=3); //decrementar en 3
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp 
byte edad = 16;
Console.WriteLine(edad++); //post-incremento
Console.WriteLine(edad--); //post-decremento
Console.WriteLine(++edad); //pre-decremento
Console.WriteLine(--edad); //pre-incremento
Console.WriteLine(edad+=3); //incrementar en 3
Console.WriteLine(edad-=3); //decrementar en 3
```

</TabItem>

<TabItem value="vb" label="VB">

En Vb se tiene el de incrementar en n y decrementar en n

```visual-basic
Dim edad As Integer = 15
edad += 1
Console.WriteLine(edad)
edad -= 1
Console.WriteLine(edad)
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