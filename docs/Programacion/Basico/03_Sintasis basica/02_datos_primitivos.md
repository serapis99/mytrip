import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Datos Primitivos

Dependiendo el lenguaje tendremos mas o menos datos primitivos. para aclarar los datos primitivos son tipos de datos que nos permiten almacenar valores de ese tipo.

## Enteros

Este tipo de variable nos permitira almacenar numeros.

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

|tipo|bytes|valor min| valor maximo|subfijo|
|---|---|---|---|---|
|Long|8|-9223372036854775808|9223372036854775807|L|
|int|4|-2147483648|2147483647||
|short|2|-32768|32767||
|byte|1|-128|127||

</TabItem>

<TabItem value="csharp" label="C#">

|tipo|bytes|valor min| valor maximo|subfijo|
|---|---|---|---|---|
|nuint|8|depende|depende||
|nint|8|depende|depende||
|ulong|8|0|18446744073709551615||
|long|8|-9223372036854775808|9223372036854775807||
|uint|4|0|4294967295||
|int|4|-2147483648|2147483647||
|ushort|2|0|65535||
|short|2|-32768|32767||
|byte|1|0|255||
|sbyte|1|-128|127||

:::note Nota
Se puede almacenar datos de otra base usando los siguientes prefijos<br/>
hexadecimales: con el prefijo de 0x o 0X<br/>
binary: con el 0b prefijo o 0B<br/>
aunque se siguen tratando en base 10 internamente.

```csharp
//usando el separador guion bajo
byte edad = 0X_20;
Console.WriteLine(edad);

edad = 0B_100000;
Console.WriteLine(edad);

//sin usar el guion bajo
edad = 0X20;
Console.WriteLine(edad);

edad = 0B100000;
Console.WriteLine(edad);
```
:::

</TabItem>

<TabItem value="vb" label="VB">

En VB tenemos dos versiones aun activas de desarrollo por lo tanto se debe conocer en que version se esta trabajando y validar el tipo a usar.

|Framework|VB 2010|Vb 6|byte|valor min| valor maximo|
|---|---|---|---|---|---|
|System.SByte|Sbyte|N.A|1|-128|127|
|System.Int16|Short|Integer|2|-32768|32767|
|System.Int32|Integer|Long|4|-2147483648|2147483647|
|System.Int64|Long|N.A|8|-9223372036854775808|9223372036854775807|
|System.Byte|Byte|Byte|1|0|255|
|System.UInt16|Ushort|N.A|2|0|65535|
|System.UInt32|UInteger|N.A|4|0|4294967295|
|System.Int64|ULong|N.A|8|0|18446744073709551615|

</TabItem>

<TabItem value="cpp" label="C++">

|Nombre|Tamaño|valor minimo|valor maximo|
|---|---|---|---|
|short|2 byte|-32368|32767|
|int|4 byte|-2147483648|2147483647|
|long|4 byte|-2147483648|2147483647|
|long long| 8 bytes|-9223372775808|9223372775807|

:::note Nota
estos tipos pueden modificar su rango a solo positivos con la palabra clave `unsigned`
:::

</TabItem>




</Tabs>

## Numeros de Coma Flotante

Este tipo de variables nos permitira almacenar numeros con decimales

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

|tipo|bytes|valor min| valor maximo|subfijo|
|---|---|---|---|---|
|Double|8|4.9E-324|1.7976931348623157E308||
|Float|4|1.4E-45|3.4028235E38|F|

</TabItem>

<TabItem value="csharp" label="C#">

|tipo|bytes|valor min| valor maximo|subfijo|
|---|---|---|---|---|
|Decimal|16|||M|
|Double|8|4.9E-324|1.7976931348623157E308||
|Float|4|1.4E-45|3.4028235E38|F|

</TabItem>

<TabItem value="vb" label="VB">

|Framework|VB 2010|Vb 6|byte|valor min|valor maximo|
|---|---|---|---|---|---|
|System.Single|Single|Single|4|1.4E-45|3.4028235E38|
|System.Double|Double|Double|8|4.9E-324|1.7976931348623157E308|
|System.Decimal|Decimal|Currency *|16|||

</TabItem>

<TabItem value="cpp" label="C++">

|Nombre|Tamaño|Descripcion|
|---|---|---|
|float|4 bytes|parte decimal 7 digitos|
|double|8 bytes|parte decimal 15 digitos|
|long double|8 bytes |parte decimal 19 digitos|

</TabItem>

</Tabs>

## Chart

los datos de tipo chart nos permite almacenar cualquier caracter que se encuentre en la tabla unicode.

<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

|tipo|bytes|
|---|---|
|Chart|2|

</TabItem>

<TabItem value="csharp" label="C#">

|tipo|bytes|
|---|---|
|Chart|2|

</TabItem>

<TabItem value="vb" label="VB">

|Framework|VB 2010|Vb 6|byte|
|---|---|---|---|
|System.Char|Char|N.A.(ChrW)|2|


</TabItem>

<TabItem value="cpp" label="C++">

|Nombre| Descripcion| Tamaño|
|---|---|---|
|char|Caracter o entero pequeño| 1 byte|
|char8_t|Caracter Unicode 8 bits| 1 byte|
|char16_t|Caracter Unicode 16 bits|2 bytes|
|char32_t|caracteres Unicode 32 bits|4 bytes|
|wchar_t|caracteres Unicode| 4 bytes|

</TabItem>

</Tabs>

## Boolean

Este tipo nos permite almacenar verdadero o falso.
<Tabs groupId="lenguaje">

<TabItem value="java" label="Java">

|tipo |valor min| valor maximo|
|---|---|---|
|Boolean|false|true|

</TabItem>

<TabItem value="csharp" label="C#">

|tipo |valor min| valor maximo|
|---|---|---|
|Boolean|false|true|

</TabItem>

<TabItem value="vb" label="VB">

|Framework|VB 2010|Vb 6|valor min| valor maximo|
|---|---|---|---|---|
|System.Boolean|Boolean|Boolean *|false|true|

</TabItem>

<TabItem value="cpp" label="C++">

|tipo |valor min| valor maximo|
|---|---|---|
|Bool|false|true|

</TabItem>

</Tabs>