# metodo GET y POST

para poder enviar los formularios debemos darle el metodo en el que se va enviar. 

el metodo get enviara los datos a traves de la url, mientras el metodo post lo enviar encapsulado en el cuerpo del mensaje, en un campo llamado formData.

los campos deben tener un **name** ya que si no lo tienen es como si no existiera ese campo, al momento de enviar esos datos. 
```HTML
<form action="direccion_quien_resive_los_datos" method="metodo">
    <input type="submit" value="enviar">
</form>
```