import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Estructuras basicas

Por las caracteristicas de ciertos lenguajes tendremos que crear un esquema obligatorio para poder correr nuestros codigos escritos en estos lenguajes, se entiende que todos los programas deben iniciar en alguna parte para esto existe los **main** en los lenguajes algunos ejemplos

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

```java title='program.java'
public class program { // el nombre de la clase es el mismo que el archivo
  public static void main(String args[]) { // metodo estatico main
    System.out.println("Hola mundo"); //instruccion para imprimir en pantalla
  }
}
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp title='main.cs'
internal class Program //nombre de la clase
{
    private static void Main(string[] args) // metodo estatico Main
    {
        Console.WriteLine("Hola mundo"); // instruccion para imprimir en pantalla
    }
}
```

</TabItem>

<TabItem value="vb" label="VB">

```visual-basic title="main.vb"
Imports System 'importar libreria System

Module Program ' modulo que lo llamamos program 
    Sub Main(args As String()) ' funcion Main
        Console.WriteLine("Hola mundo") 'se escribe en consola 
    End Sub
End Module
```

</TabItem>

<TabItem value="cpp" label="C++">

```cpp title="main.cpp"
#include "iostream" //libreria iostream
using namespace std; // indicamos que queremos usar el espacio de nombre std de iostream
int main() // metodo main
{
     cout << "Hola mundo\n" <<endl; 
     //(cout) caracter out imprime en pantalla 
     //(endl) ingresa salto de linea
     return 0; // devuelve 0 cuando todo fue ok
}
```

</TabItem>

<TabItem value="py" label="Python">

```py title="main.py"
# No necesita ninguna estructura base pero se recomienda
if __name__=='__main__': # condicional que valida si se esta ejecutando el archivo como main
  print("Hola mundo") # instruccion para imprimir en pantalla
```

</TabItem>

<TabItem value="go" label="Go">

```go
package main //paquete principal de go

import "fmt" //paquete que nos permite usar la salida por consola

func main() { // funcion principal del lenguaje
	fmt.Println("Hola mundo") //imprime en mensaje hola mundo
}

```

</TabItem>
</Tabs>
