# Dynamic

las pseudoclases dinamicas validan si hay o hubo una accion en un elemento en este grupo de pseudoclases tenemos:

| pseudoclase | descripcion |
|---|---|
| :link | (link) links no visitados|
| :visited | (link) link visitados |
| :active | (link) el momento del click |
| :hover | Al poner el mouse sobre el elemento |
| :focus | cuando el elemento tiene el foco |

Ejemplo:
```css
a:link,
a:visited{
    color:red;
}

```