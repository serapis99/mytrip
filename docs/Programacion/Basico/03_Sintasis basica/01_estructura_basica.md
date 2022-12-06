import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Estructuras basicas

Por las caracteristicas de ciertos lenguajes tendremos que crear un esquema obligatorio para poder correr incluso un hola mundo en el archivo principal, los siguientes son algunos ejemplos:

<Tabs>

<TabItem value="java" label="Java">

```java title='main.java'
public class HolaMundo {
  public static void main(String args[]) {
    System.out.println("Hola mundo");
  }
}
```

</TabItem>

<TabItem value="csharp1" label="C# antigua forma">

```csharp title='main.cs'
internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Hola mundo");
    }
}
```

</TabItem>

<TabItem value="csharp2" label="C# nueva forma">

```csharp title='main.cs'
// ya no tiene estructura principal
Console.WriteLine("Hola mundo");
```

</TabItem>

<TabItem value="vb" label="VB">

```visual-basic title="main.vb"
Imports System

Module Program
    Sub Main(args As String())
        Console.WriteLine("Hola mundo")
    End Sub
End Module
```

</TabItem>

<TabItem value="py" label="Python">

```py title="main.py"
# No necesita ninguna estructura base pero se recomienda
if __name__=='__main__':
  print("Hola mundo")
```

</TabItem>

</Tabs>
