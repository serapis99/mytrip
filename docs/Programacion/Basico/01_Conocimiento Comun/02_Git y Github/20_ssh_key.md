# ssh key para conexion github

Para hacer una conexion podemos usar una conexion ssh y lo primero que debemos hacer es verificar que tenemos los archivos ssh en nuestro usuario con el siguiente comando vamos a la ruta por defecto donde los archivos se crean.

```bash
cd ~/.ssh
ls
```

aqui podemos encontrar estos archivos.

1. id_rsa
2. id_rsa.pub

si no se tiene estos archivos podemos suponer que no los hemos creados por lo tanto debemos usar el siguiente comando para poder crear estos archivos.

```bash
ssh-keygen -o
```

cuando nos pregunte **Enter passphrase** debemos colocar una contraseña que sera usada cuando nos conectemos a github.

una vez que se cree el archivo id_rsa.pub debemos abrirlo y copiar su contenido en la parte de ssh en la pagina de github.

```bash
cat ~/.ssh/id_rsa.pub
```

una vez que lo creemos en la pagina debemos agregar esta clave al agente de administracion de claves con los comandos

```bash
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
```

despues de añadir estas claves se podra clonar el repositorio de forma correcta.

```bash
git clone git@githib.com***
```

[mas informacion](https://www.ingeniusworlds.com/como-clonar-un-repositorio-de-github-con-ssh/)