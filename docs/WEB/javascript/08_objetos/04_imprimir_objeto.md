# Imprimir Objetos

## concatenar cada valor de cada propiedad

```javascript
console.log(persona.nombre+", "+persona.apellido);
```

## recorrerlo con for in

```javascript
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
```

## usando el metodo values de object

```javascript
console.log(Object.values(persona));
```

## convertirlo en objeto json

```javascript
console.log(JSON.stringify(persona));
```
