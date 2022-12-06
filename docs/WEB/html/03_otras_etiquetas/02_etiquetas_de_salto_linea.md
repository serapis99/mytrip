# etiquetas de salto de linea

las etiquetas de salto de linea nos permite romper un texto y hacer que continue en la siguiente linea para este hecho tenemos dos etiquetas **br** y **wbr**

## br

la etiqueta **br** debe ser usada para hacer un salto de linea por ejemplo en un poema, ***NO se debe usar para dar un estilo de separacion***

Ejemplo:

```HTML
<h3>Canto 3 (la divina comendia)</h3>
<p>POR MI SE VA HASTA LA CIUDAD DOLIENTE,<br>POR MI SE VA AL ETERNO SUFRIMIENTO,<br>POR MI SE VA A LA GENTE CONDENADA.</p>

<p>LA JUSTICIA MOVIÓ A MI ALTO ARQUITECTO.<br>HIZOME LA DIVINA POTESTAD,<br>EL SABER SUMO Y EL AMOR PRIMERO.</p>

<p>ANTES DE MI NO FUE COSA CREADA<br>SINO LO ETERNO Y DURO ETERNAMENTE.<br>DEJAD, LOS QUE AQUI ENTRAIS, TODA ESPERANZA.</p>
```

## wbr

esta etiqueta nos permite indicarle al navegador donde puede romper el texto cuando tenga que separar la palabra porque no cabe en el contenedor. 

los navegadores tambien interpretan el **-** guio o el simbolo menos como una etiqueta wbr y hay realizarian el salto de linea.

```HTML
<p>http://127.0.0.1/<wbr>cursos</wbr>/<wbr>html</wbr>/<wbr>elementos</wbr>/elementos.html</p>
```