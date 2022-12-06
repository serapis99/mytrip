# Cambiar de base numerica

en algun caso necesitamos para de base decimal a hexadecimal o octal o binaria, en javascript solo seria por parte visual ya que todas las operaciones las realizaria en base 10 o decimal.

## de texto a numero.

para comvertir de texto a numero usamos *parseInt* y le indicamos como segundo parametro la base en que esta el texto en este caso hexadecimal.

```javascript
let numero="FFFFFF"
numero=parseInt(numero,16);
```

## de numero a texto

para comvertir de un numero a un texto en una base especifica se usa toString y como parametro se pasa la base en que necesitamos que nos muestre el valor.

```javascript
let numero=154785
console.log(numero.toString(16)); //25ca1
```

