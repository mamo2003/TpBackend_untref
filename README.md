# TpBackend_untref

Incializar desde new terminal con comando NPM START.



## RUTAS
ruta raiz: 
http://localhost:3001/

metodo|first header | second header | :parameters | detalle
------|-------|---------------|------------|----------
GET  |api/super/       |                |            |   trae resultado  total de articulos en almacen.
GET  |api/super/        |  :nombre      |             |  trae resultado segun nombre parcial o  total del producto.
GET  |api/super/        |  categoria/   | :categoria   |  trae resultado por categoria  de porductos.
GET  |api/super/        |  :codigo       |              | trae articulo segun codigo ingresado.
POST  |api/super/       |                |            | ingresar a traves de posmant // thunder , options: POST  ingresar la ruta , definir opcion JSON  -- RAW  y colocar en el body: {"codigo": xxxx,"nombre":"Abcdef","precio":xxx,"categoria":"Asgdefcewa"}.luego presionar SEND. y el articulo sera creado en la base mongoDB.
PUT  | api/super/    |  :id    |     |ingresar el id  en la bara del navegador  seguido de la ruta  e ingresar a traves de posmant // thunder , options: PUT  ingresar la ruta , definir opcion JSON  -- RAW  y colocar en el body con el siguiente formato: {"codigo": xxxx,"nombre":"Abcdef","precio":xxx,"categoria":"Asgdefcewa"}. los datos que se quieran actualizar . luego presionar SEND. y el articulo se actualizaran los datos ingresados en la base mongoDB.
DELETE|api/super/ | :id  |   | ingresa el numero de Id  a continuacion de la ruta marcada en el navegador  de posmant // thunder , options: DELETE,  luego presiona "SEND".
