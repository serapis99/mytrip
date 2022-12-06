# Enviar un correo con python

Para poder enviar un correo electronico debemos tener presente el servidor que maneja protocolo `smtp` y el cifrado que esta usando.

+ Gmail: 
  + servidor: smtp.gmail.com
  + cifrado: SSl y STARTTLS
  + puerto: SSL: 465 y STARTTLS:587
+ Hotmail:
  + servidor:smtp.office365.com
  + cifrado:STARTTLS
  + puerto: 587

Teniendo esto contemplado para el servidor que queremos usar para el envio de mensajes creamos las variables segun aplique.

``` py showLineNumbers
servidor="smtp.gmail.com"
es_cifrado_SSL=True
if es_cifrado_SSL:
    puerto=465
else:
    puerto=587
```

para poder usar el cifrado SSL debemos importar la clase SSL de la siguiente forma:

``` py {1} showLineNumbers
import ssl

servidor="smtp.gmail.com"
es_cifrado_SSL=True
if es_cifrado_SSL:
    puerto=465
else:
    puerto=587
```

Otras variables que debemos crear son el usuario, la contraseña, los destinatarios, el asunto y el cuerpo del mensaje.

``` py {6-10} showLineNumbers
import ssl

servidor="smtp.gmail.com"
es_cifrado_SSL=True

usuario="correo@gmail.com"
password="contraseña"
destinatario="correo1@gmail.com;correo2@gmail.com;correo3@gmail.com"
asunto="prueba python"
cuerpo="hola, quiero preguntarles si les llego este correo jajaja"

if es_cifrado_SSL:
    puerto=465
else:
    puerto=587
```

para recostruir el mensaje y poderlo enviarlo al servidor como mensaje de email debemos importar la clase  `EmailMessage`  del modulo `email.message`. 

Despues crearemos una instancia de esa clase y comensarremos a pasar los valores .

``` py {1,18-22} showLineNumbers
from email.message import EmailMessage
import ssl

servidor="smtp.gmail.com"
es_cifrado_SSL=True

usuario="correo@gmail.com"
password="contraseña"
destinatario="correo1@gmail.com;correo2@gmail.com;correo3@gmail.com"
asunto="prueba python"
cuerpo="hola, quiero preguntarles si les llego este correo jajaja"

if es_cifrado_SSL:
    puerto=465
else:
    puerto=587

em=EmailMessage()
em['From']=correo
em['To']=to
em['Subject']="pruebas en python"
em.set_content(cuerpo)
```

por ultimo y poder enviar el correo usamos la clase `smtplib` con sus respectivos metodos para poder enviar el correo.

``` py {3,25-34} showLineNumbers
from email.message import EmailMessage
import ssl
import smtplib

servidor="smtp.gmail.com"
es_cifrado_SSL=True

usuario="correo@gmail.com"
password="contraseña"
destinatario="correo1@gmail.com;correo2@gmail.com;correo3@gmail.com"
asunto="prueba python"
cuerpo="hola, quiero preguntarles si les llego este correo jajaja"

if es_cifrado_SSL:
    puerto=465
else:
    puerto=587

em=EmailMessage()
em['From']=correo
em['To']=to
em['Subject']="pruebas en python"
em.set_content(cuerpo)

if es_cifrado_SSL:
    contexto=ssl.create_default_context() # crea el cifrado ssl a usar en la conexion
    with smtplib.SMTP_SSL(servidor,puerto,context=contexto) as smtp: # realiza la peticion de conexion
        smtp.login(usuario,password) # se loguea usando el usuario y el password
        smtp.sendmail(usuario,destinatario,em.as_string()) # envia el correo al servidor
else:
    with smtplib.SMTP(servidor, puerto) as server: # realiza la peticion de conexion
        server.starttls() # crea el cifrado starttls para usar en la conexion
        server.login(correo, password) # se loguea usando el usuario y el password
        server.sendmail(correo, to, em.as_string()) # envia el correo al servidor
```