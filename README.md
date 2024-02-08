# Práctica

## Issue 1

He inciado un proyecto de node:

```bash
npm init -y
```

He configurado mi `package.json`:

```json
{
  "name": "practica_express",
  "version": "1.0.0",
  "description": "Primera practica manejando backends",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "alvaro",
  "license": "ISC"
}
```

## Issue 2

He instalado express:

```bash
npm install express
```

Añado un script para inciar el servidor:

```bash
{
  "scripts": {
    "dev": "node server.js"
  }
}
```

Creé un archivo `server.js` con el siguiente contenido:

```js
const express = require('express')
const app = express()

app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
});
```

Añado una función express, y luego creo una app ejecutandola y luego hago que la app escuche en el puerto 3000.

Puedo ver que el servidor ejecuta con éxito gracias a `npm run dev`.

## Issue 3

Añadí una ruta que responde a las peticiones de GET en la ruta /holamundo con el mensaje "Holaaa".

```js
app.get('/holamundo', (req, res) =>{
    res.send('Holaaa');
});
```