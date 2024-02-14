# practica_express
Primera practica manejando backends

Para realizar la practica:

1. Crea una rama con tu nombre (DONE)
2. Clona el repositorio (DONE)
3. Ve a tu rama (DONE)
4. Realiza tus cambios siguiendo los issues, no es necesario que crees ramas especificas para cada issue, pero si es necesario que hagas commits especificos y claros cuando resuelvas uno para ayudar a la revisión.
5. **NO** mandes un pull request a master, manda un pull request a tu rama.
6. Cuando termines, manda los cambios a tu rama en tu repositorio y luego a este repositorio.

## issue 1
He arancado un proyecto en mir rama a traves `npm run test`. Con este codigo, el archivo "package.jsso" estaba creado (Un archivo donde he escribido mi nombre tan autor, el nombre del proyecto y otros informaciones necessarios.)

```json
{
  "name": "practica_express",
  "version": "1.0.0",
  "description": "Practica manejando backdends para makram elghadir",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["nodejs", "express", "attempt"],
  "author": "Makram",
  "license": "LICENSE"
}
```

## issue 2

Despues crear y re-escribir "package.json", debo instalar la liberia "Express". Este instalacion solo necessita el escrito de `npm install express` en la consola. En addicion de la modificacion de "package.json", el archivo "package-lock.json" estaba creatada tambien. 

```json
{
  "name": "practica_express",
  "version": "1.0.0",
  "description": "Practica manejando backdends para makram elghadir",
  "main": "server.js",
  "scripts": {
    "dev": "node server.js"
  },
  "keywords": [
    "nodejs",
    "express",
    "attempt"
  ],
  "author": "Makram",
  "license": "LICENSE",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

Finalmente, debemos terner un servidor. Un accion que necessita la creacion y escribo del archivo `server.js`:

```js
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```

Y para iniciar el servidor para ver si fonciona. Es importante de venir a la lina 7 de `package.json` y verificar si `script.js` es linkeada :

```json
"scripts": {
    "dev": "node server.js"
  },
```