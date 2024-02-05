# practica_express
Primera practica manejando backends

Para realizar la practica:

1. Haz un fork del repositorio
2. Crea una rama con tu nombre
3. Clona el repositorio
4. Ve a tu rama
5. Realiza tus cambios siguiendo los issues, no es necesario que crees ramas especificas para cada issue, pero si es necesario que hagas commits especificos y claros cuando resuelvas uno para ayudar a la revisión.
6. **NO** mandes un pull request a master, manda un pull request a tu rama.
7. Cuando termines, manda los cambios a tu rama en tu repositorio y luego a este repositorio.

# Practica

## Inicio

Creé una rama con mi nombre, cloné el repositorio y me moví a mi rama.

## Issue 0

Iniciar proyecto en node:

```bash
npm init -y
```

Configuré mi `package.json`:

```json
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
```

## Issue 1

Instalé express:

```bash
npm install express
```

Añadí un script para iniciar el servidor:

```json
{
  "scripts": {
    "dev": "node server.js"
  }
}
```
## Issue 2

Creé un archivo `server.js` con el siguiente contenido:

```javascript
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```

En este script importo la libreria express y la uso para iniciar una app. Luego, creo una ruta que responde a peticiones GET en la raíz del servidor con el mensaje "Hello World!". Finalmente, inicio el servidor en el puerto 3000.

Si ejecuto el servidor con `npm run dev` puedo ver que el servidor se ha iniciado con éxito.