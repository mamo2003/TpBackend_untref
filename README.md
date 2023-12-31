# TpBackend_untref.

# Descripcion de la API Supermercado 5.
Esta API cumple la función de administrar la información referente a los artículos disponibles en __Super5__, el supermercado del grupo 5.
A través de esta API podrá realizar consultas sobre los productos disponibles, ya sea por código, categoría, producto o precio.
Además, podrá realizar diferentes funciones, cómo crear, modificar o eliminar un artículo.

# Gettin Started.

Para acceder a la base de datos se debe usar la siguiente URL:

> http://localhost:3001/

# Endpoints.

Si bien los endpoints estan disponibles en el menu de la pagina de inicio, se detalla a coninuacion la lista de endpoints con sus rutas correspondientes.

## Lista de los endpoints de la API.

### Obtener la lista de __todos los productos del supermercado__.

- Metodo: GET
- Ruta: '/supermercado'
- Respuesta: Lista de todos los productos del supermercado en formato de tabla.

### Respuestas.

- 500 Error al conectarse a mongoDB.

### Obtener un articulo filtrando por __codigo__.

- Metodo: GET
- Ruta: '/nombre/nombre del articulo buscado'
- Respuesta: Articulo buscado (id).

## Respuestas.

- 500 Error al conectarse a mongoDB.
- 404 No es posible encontrar un producto con el codigo: __id__, intentalo nuevamente

### Obtener un articulo filtrando por __nombre__.

- Metodo: GET
- Ruta: '/id'
- Respuesta: Articulo buscado (nombre).

## Respuestas.

- 500 Error al conectarse a mongoDB.
- 404 No es posible encontrar un producto en esta categoria: __nombre__, intentalo nuevamente.

### Obtener todos los articulos de una __categoría__.

- Metodo: GET
- Ruta: '/categoría/nombre de la categoría'
- Respuesta: Todos los articulos de la categoría especificada.

### Respuestas.

- 500 Error al conectarse a mongoDB.
- 404 no es posible encontrar un producto en esta categoria: __categoría__, intentalo nuevamente.




## Iniciar el servidor.
Incializar desde new terminal con comando NPM START.

## Rutas.
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




