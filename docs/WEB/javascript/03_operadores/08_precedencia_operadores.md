# Precedencia de operadores

como en la matematica existen operadores que tienen prioridad sobre otros, por lo tanto se deben resolver primero los que mayor prioridad. 

| precedencia | tipo de operador | asociatividad | operadores individuales |
| --- | --- | --- | --- |
| 19 | Agrupamiento | n/a | ( ... )
| 18 | Acceso a Propiedades (notacion por punto) | de derecha a izquierda | ... . ... |
| 18 | Acceso a propiedades [notacion por corchetes] | a la izquierda | ...[...] |
| 18 | new (con lista de argumentos) | n/a | new ... (...) |
| 18 | llamada a funcion | a la izquierda | ...(...) |
| 18 | Encadenamiento opcional | a la izquierda | ?. |
| 17 | new (sin lista de argumentos) | a la derecha | new ... |
|16 | pos-incremento | n/a|...++|
|16 | pos-decremento| n/a| ...-- |
|15 | Not lógico | a la derecha | ! ...|
|15 | Not a nivel de bit | a la derecha | ~...|
|15 | suma unaria | a la derecha | + ...|
|15 | negacion unaria | a la derecha | - ...|
|15 | pre-incremento | a la derecha | ++ ...|
|15 | pre-decremento | a la derecha | -- ...|
|15 | typeof | a la derecha | typeof ...|
|15 | void | a la derecha | void ...|
|15 | delete | a la derecha | delete ...|
|15 | await | a la derecha | await ...|
|14 | potenciacion ** | a la derecha | ... ** ...|
|13 | multiplicacion * | a la derecha | ... * ...|
|13 | division / | a la derecha | ... / ...|
|13 | modulo % | a la izquierda| ... % ...|
|12 | adicion + | a la izquierda | ... + ...|
|12 | sustraccion - | a la izquierda | ... - ...|
|11 | desplazamiento de bits a la izquierda << | a la izquierda | ... << ...|
|11 | desplazamiento de bits a la derecha >> | a la izquierda | ... >> ...|
|11 | desplazamiento de bits a la derecha sin signo >>> | a la izquierda | ... >>> ...|
|10 | menor a < | a la izquierda | ... < ...|
|10 | menor o igual a <= | a la izquierda | ... <= ...|
|10 | mayor a > | a la izquierda | ... > ...|
|10 | meyor o igual a >= | a la izquierda | ... >= ...|
|10 | in | a la izquierda | ... in ...|
|10 | instanceof | a la izquierda | ... instanceof ...|
|9 | igualdad | a la izquierda | ... == ...|
|9 | desigualdad | a la izquierda | ... != ...|
|9 | igualdad estricta | a la izquierda | ... === ...|
|9 | desigualdad estricta| a la izquierda | ... !== ...|
|8 | and a nivel bit & | a la izquierda | ... & ...|
|7 | xor a nivel bit ^ | a la izquierda | ... ^ ...|
|6 | or a nivel bit \| | a la izquierda | ... \| ...|
|5 | and logico && | a la izquierda | ... && ...|
|4 | or logico \|\| | a la izquierda | ... \|\| ...|
|4 | operador de coalescencia nula ?? | a la izquierda | ... ?? ...|
|3 | Operador condicional ternario | a la derecha | ... ? ... : ...|
|2 | asignacion | a la derecha | ... = ...|
|2 | asignacion | a la derecha | ... += ...|
|2 | asignacion | a la derecha | ... -= ...|
|2 | asignacion | a la derecha | ... **= ...|
|2 | asignacion | a la derecha | ... *= ...|
|2 | asignacion | a la derecha | ... /= ...|
|2 | asignacion | a la derecha | ... %= ...|
|2 | asignacion | a la derecha | ... <<= ...|
|2 | asignacion | a la derecha | ... >>= ...|
|2 | asignacion | a la derecha | ... >>>= ...|
|2 | asignacion | a la derecha | ... &= ...|
|2 | asignacion | a la derecha | ... ^= ...|
|2 | asignacion | a la derecha | ... \|= ...|
|2 | asignacion | a la derecha | ... &&= ...|
|2 | asignacion | a la derecha | ... \|\|= ...|
|2 | asignacion | a la derecha | ... ??= ...|
|2 | yield | a la derecha | yield ...|
|2 | yield* | a la derecha | yield* ...|
|1 | operador coma | a la izquierda | ... , ...|


