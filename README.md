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

## Issue 4

Creo una función que devuelve un emoji aletorio:

```js
function randomEmoji(){
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    return emoji;
}
```

Creo tambié un endpoint que envie el emoji:

```js
app.get('/emoji', (req, res) => {
    res.send(randomEmoji());
    });
```

## Issue 5

He creado una función para generar numeros aleatorios, y otra para devolver un elemento aleatorio de una lista:

```js
function random(n){ //función para devolver un número aleatorio entre 0 y n
    return Math.floor(Math.random() * n);
}

function randomElement(arr){ //función para devolver un elemento aleatorio de un array
    return arr[random(arr.length)];
}
```
He creado una función para devolver emojis aleatorios:

```js
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

```js
app.get('/emoji', (req, res) => {
    const emojiNumber = parseInt(req.query.emojiNumber); //guarda el valor del query parameter emojiNumber y conviertelo a entero
    emojiNumber ? res.send(randomEmoji(emojiNumber)) : res.send(randomEmoji()); //si emojiNumber existe, devuelve n emojis, si no, devuelve 1 emoji
    });
```
## Issue 6

He creado el endpoint /saludo, guardo la propiedad accept del header de la petición y devuelvo un saludo en el formato correspondiente:

```js
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
