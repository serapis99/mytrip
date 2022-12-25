import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Entrada y salida de datos

para que un desarrollo, nos permita interactuar con un usuario debemos usar comandos de entrada y salida de datos.


## entrada por consola

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

En java podemos obtener datos de usuario usando el objeto `Scanner`

```java
import java.util.Scanner;

public class HolaMundo {
	public static void main(String[] args) {
		Scanner s=new Scanner(System.in);
		String nombre;
		System.out.println("Escribe tu nombre");
		nombre=s.nextLine();
		System.out.println("Hola "+ nombre);
	}
}

// metodos mas usados para pedir datos.
// nextLine()
// nextInt()
// nextDouble()

```
</TabItem>

<TabItem value="csharp" label="C#">

En c# existe la sentensia **Console.ReadLine()**

```csharp 
Console.ReadLine();
```

</TabItem>

<TabItem value="vb" label="VB">

En VB existe la sentensia **Console.ReadLine()**
```visual-basic
Console.ReadLine()
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

## entrada grafica

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

En java se tiene una entrada grafica usando `JOptionPane`

```java
import javax.swing.JOptionPane;

public class HolaMundo {
	public static void main(String[] args) {
		String nombre=JOptionPane.showInputDialog("Escribe tu nombre");
		System.out.println("Hola "+ nombre);
	}
}
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

## formatear salida

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

```java
// formatear un numero 
System.out.printf("%1.4f",12.87363636);  //imprime todo el entero y cuatro numeros decimales
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