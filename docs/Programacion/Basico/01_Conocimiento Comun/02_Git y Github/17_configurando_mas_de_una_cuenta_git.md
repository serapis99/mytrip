# configurando mas de una cuenta git

para poder configurar mas de una cuenta le debemos decir a git que en un repositorio dado debe usar una cuenta diferente a la que se tiene configurada globalmente.

```bash
# usuario
git config --local user.name="damian"
#email
git config --local user.email="damian@gmail.com"

# las demas configuraciones se heredan si se desean cambiar solo es ejecutarlas pero con --local de vez de local.
```