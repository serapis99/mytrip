# Atributos Globales

los atributos globales o comunes son los atributos que la mayoria de etiquetas posee y tienen el mismo comportamiento.

## class

este atributo se usa para dar estilos a traves de css.


```HTML
<head>
    <style>
        .parrafo-1{
            color:red;
        }
    </style>
</head>
<body>
    <p class="parrafo-1"></p>
</body>
```
## id

es un identificador unico que se utiliza para seleccionar el elemento desde JS y para hacer navegacion a traves de anclas.

```HTML
<body>
    <p id="parrafo">datos</p>
    <script>
        const p=document.getElementById('parrafo');
        console.log(p.textContent)
    </script>
</body>

```

## title 

es un atributo que ayuda a la accesibilidad mostrando una descripcion del elemento al que pertenece.

```HTML
<p title="esto es">debe aparecer un mensaje tooltip</p>
```

# data-*

es un atributo que nos permite guardar algun valor en la etiqueta HTML

```HTML
<body>
    <p id="parrafo" data-ejemplo="datos de ejemplo">datos</p>
    <script>
        const p=document.getElementById('parrafo');
        console.log(p.dataset.ejemplo)
    </script>
</body>

```

## contenteditable

nos permite hacer que el elemento que contiene el atributo sea editable, y es un atributo booleano.

```HTML
<body>
    <h1 contenteditable>modificame</h1>
</body>

```