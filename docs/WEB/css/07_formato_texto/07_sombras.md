# sombras de texto

**Text-shadow**: funciona exactamente igual que **box-shadow**, con la unica diferencia de que no admite el valor **inset** ni la expansion de la sombra.

los valores son:
+ offsetX: desplazamiento horizontal.
+ offsetY: desplazamiento vertical.
+ blur: desenfoque.
+ color: color, por defecto coge el del texto.

```css
p{
    text-shadow:3px 3px 0 red;
}
```

**NOTA**, tambien admite multiples sombras.

```css
p{
    text-shadow:3px 3px 0 red, 2px 0 blue;
}
```