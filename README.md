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
POST  |api/super/       |                |            | ingresar a traves de posmant // thunder , options: POST  ingresasr la ruta , definir opcion JSON  -- RAW  y colocar en el body: {"codigo": xxxx,"nombre":"Abcdef","precio":xxx,"categoria":"Asgdefcewa"}.


