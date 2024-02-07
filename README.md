# practica_express
Primera practica manejando backends

Para realizar la practica:

1. Crea una rama con tu nombre
2. Clona el repositorio
3. Ve a tu rama
4. Realiza tus cambios siguiendo los issues, no es necesario que crees ramas especificas para cada issue, pero si es necesario que hagas commits especificos y claros cuando resuelvas uno para ayudar a la revisión.
5. **NO** mandes un pull request a master, manda un pull request a tu rama.
6. Cuando termines, manda los cambios a tu rama en tu repositorio y luego a este repositorio.

# Practica

## Inicio

Creé una rama con mi nombre, cloné el repositorio y me moví a mi rama.

## Issue 1

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

## Issue 2

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

Creé un archivo `server.js` con el siguiente contenido:

```javascript
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```

Importo la función express, luego creo una app ejecutandola y finalmente hago que la app escuche en el puerto 3000.

Si ejecuto el servidor con `npm run dev` puedo ver que el servidor se ha iniciado con éxito.

## Issue 3

Añadí una ruta que responde a peticiones GET en la ruta `/holamundo` con el mensaje "Hola mundo".

```javascript
app.get('/holamundo', (req, res) => {
  res.send('Hola mundo');
});
```

## Issue 4

Creo una función para devolver un emoji aleatorio:

```javascript
function randomEmoji(){
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    return emojis[Math.floor(Math.random() * emojis.length)];
}
```

He hecho un endpoint que envia el emoji:

```javascript
app.get('/emoji', (req, res) => {
    res.send(randomEmoji());
    });
```

## Issue 5

He creado una función para generar numeros aleatorios, y otra para devolver un elemento aleatorio de una lista:

```javascript
function random(n){ //función para devolver un número aleatorio entre 0 y n
    return Math.floor(Math.random() * n);
}

function randomElement(arr){ //función para devolver un elemento aleatorio de un array
    return arr[random(arr.length)];
}
```

He creado una función para devolver emojis aleatorios:

```javascript
function randomEmoji(...args){ //función para devolver un emoji aleatorio o n emojis aleatorios
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    if(args.length === 0){ //si no se pasa ningún argumento, devolver un emoji aleatorio
        return randomElement(emojis);
    }
    const nEmojis = args[0]; //guarda el valor del primer argumento
    const randomEmojis = []; //crea un array vacío
    for (let i = 0; i < nEmojis; i++) { //itera n veces
        randomEmojis.push(randomElement(emojis)); //añade un emoji aleatorio al array
    }
    return randomEmojis; //devuelve el array
}
```

Actualizo mi endpoint:

```javascript
app.get('/emoji', (req, res) => {
    const emojiNumber = parseInt(req.query.emojiNumber); //guarda el valor del query parameter emojiNumber y conviertelo a entero
    emojiNumber ? res.send(randomEmoji(emojiNumber)) : res.send(randomEmoji()); //si emojiNumber existe, devuelve n emojis, si no, devuelve 1 emoji
    });
```

## Issue 6

He creado el endpoint `/saludo`, guardo la propiedad `accept` del header de la petición y devuelvo un saludo en el formato correspondiente:

```javascript
app.get('/saludo', (req, res) => {
    const accept = req.headers.accept;
    if(accept === '*/*'){
        res.json({mensaje: 'Hola!'});
    } else if(accept === 'application/json'){
        res.json({mensaje: 'Hola!'});
    } else if(accept === 'text/html'){
        res.send('<h1>Hola!</h1>');
    } else if (accept === 'text/plain'){
        res.send('Hola!');
    } else {
        res.status(406).send('Not Acceptable');
    }
});
```