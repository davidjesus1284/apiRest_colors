## Documentación donde estan todas las rutas del servidor

[Postman](https://documenter.getpostman.com/view/7918195/UVJhCZiG)

## Resumen

Esta aplicación esta realizada para la creación y uso de colores y su implementación en la vista de usuario.

## Framework y paquetes utilizado

- express
- express-validator
- sequelize
- pg
- pg-hstore
- xml
- morgan
- cors
- cross-env
- dotenv

## Instrucciones para su configuración

Despues de clonar el proyecto haga los siguientes paso:
``````````
$ npm install
``````````
Debera crar el archivo .env.development y colocara la siguiente informacion:

- PORT=3000
- DB=XXXXXXX Nombre de la base de datos
- USER_DB=XXXXXXXX Usuario de base de datos
- PASSWORD_DB=XXXXXXXX Contraseña de base de datos
- HOST_DB=localhost Host local a la que se conectara la base de datos

## Comenzar la aplicación con el siguiente comando

```bash
# development
$ npm run dev

## Additional note:

Si usted no posee instalado la base de datos de PostgreSQL puede ejecutar el siguiente comando:

$ docker-composer -up

Nota: en el archivo docker-compose hay una sección que se llama environment, alli debera especificar las credenciales que va usar en su base de datos las mismas que usara en el archivo de variables de entorno.

Recuerde que, para que funcione, debera tener instalado docker en su computadora y debera de iniciarlo luego podra ejecutar el comando indicado.
```