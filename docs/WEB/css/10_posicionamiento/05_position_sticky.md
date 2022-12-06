# position sticky

position sticky toma en cuenta el alto del padre, si el padre no tiene alto es posible que cuando hacemos position sticky no funcione como deberia.

debemos tener presente que el objeto queda fijado mientras su contenedor tenga contenido en el momento que ya no tenga contenido este perdera el fijado y se mobera con el scroll

otro caso donde no funciona es cuando se tiene declarado un **overflow** en el contenedor diferente a **visible** que es el valor por defecto es mejor no tener declarado el overflow.

