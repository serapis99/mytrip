# Configurar correo 

Para poder interactuaar con el correo electronico debemos configurarlo para que permita su uso desde otras aplicaciones.

## Gmail

Para poder usar gmail y enviar correos desde aplicaciones debemos configurar gmail de la siguiente manera:

1. En la configuracion de correo buscamos la pestaña de `seguridad`
2. Una vez dentro de seguridad debemos buscar `Inicio de sesiones en google`
3. hay debemos validar que tengamos activo `verificar en dos pasos`
4. una vez que tengamos activa la verificacion en dos pasos nos permite crear contraseñas de aplicacion, volvemos a `Inicio de sesiones en google` y buscamos `contraseña de aplicacion`.
5. Agregamos una nueva contraseña de aplicacion y nos dara una nueva contraseña de 16 caracteres que podemos usar en nuestra aplicacion.

![gmail](/gif/Automatizacion/python/correo/app_pass_gmail.gif)

| datos | imap | pop | smtp |
|---|---|---|---|
|servidor|imap.gmail.com|pop.gmail.com|smtp.gmail.com|
|puerto |993|995|TLS/STARTTLS: 587<br /> SSL: 465 |
|cifrado|SSL|SSL|TLS/STARTTLS/SSL|

## Hotmail

1. En configuracion de correo buscamos la pestaña de `seguridad`
2. En el panel buscamos `Opciones de seguridad avanzada`.
3. Validamos que tengamos activa la `verificacion en dos pasos`
4. una vez activada la verificacion en la misma parde de Opciones de seguridad avanzada buscamos `contraseña de aplicaciones`
5. creamos una nueva contraseña y copiamos los 16 caracteres que nos da hotmail para la nueva aplicacion.

![hotmail](/gif/Automatizacion/python/correo/app_pass_hotmail.gif)

| datos | imap | pop | smtp |
|---|---|---|---|
|servidor| outlook.office365.com|outlook.office365.com|smtp.office365.com|
|puerto |993|995|587|
|cifrado|SSL/TLS|SSL/TLS|STARTTLS|