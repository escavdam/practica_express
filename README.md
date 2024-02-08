# practica_express
Primera practica manejando backends

Primera practica manejando backends

Para realizar la practica:

    Crea una rama con tu nombre
    Clona el repositorio
    Ve a tu rama
    Realiza tus cambios siguiendo los issues, no es necesario que crees ramas especificas para cada issue, pero si es necesario que hagas commits especificos y claros cuando resuelvas uno para ayudar a la revisión.
    NO mandes un pull request a master, manda un pull request a tu rama.
    Cuando termines, manda los cambios a tu rama en tu repositorio y luego a este repositorio.

# ISSUE 1
 Iniciar proyecto en node:
 ``npm init -y``

 Configuré mi ``package.json``

 ``````
 {
  "name": "practica_express",
  "version": "1.0.0",
  "description": "Primera practica manejando backends",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["noob", "nodejs", "express"],
  "author": "datadiego",
  "license": "CC0-1.0"
}
``````

# ISSUE 2
Instalé Express ``npm install express``

Añadí un script para iniciar el servidor:
```{
  "scripts": {
    "dev": "node server.js"
  }
}
```
Creé un archivo server.js con el siguiente contenido:
```
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```
Importo la función express, luego creo una app ejecutandola y finalmente hago que la app escuche en el puerto 3000.

Si ejecuto el servidor con ``npm run dev``  puedo ver que el servidor se ha iniciado con éxito.