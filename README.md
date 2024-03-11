# practica_express
Primera practica manejando backends

Para realizar la practica:

1. Crea una rama con tu nombre
2. Clona el repositorio
3. Ve a tu rama
4. Realiza tus cambios siguiendo los issues, no es necesario que crees ramas especificas para cada issue, pero si es necesario que hagas commits especificos y claros cuando resuelvas uno para ayudar a la revisión.
5. **NO** mandes un pull request a master, manda un pull request a tu rama.
6. Cuando termines, manda los cambios a tu rama en tu repositorio y luego a este repositorio.

# Práctica

## Issue 0

He arrancado un proyecto de node con

```bash
npm init -y
```

 y he modificado un poco el `package.json`.

```json
{
  "name": "practica_express",
  "version": "1.0.0",
  "description": "Primera practica manejando backends",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["practica", "express"],
  "author": "javi",
  "license": "ISC"
}
```

## Issue 1

He instalado express con 

```bash
npm i express
```

 y añadí un script para iniciar el servidor:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node server.js"
  },
```

## Issue 2

Creé un archivo `server.js` con el siguiente contenido:

```JavaScript
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Hemos iniciado el servidor 3000!');
});
```

En este script importo la libreria express y la uso para iniciar una app. Finalmente, inicio el servidor en el puerto 3000.
Si ejecuto el servidor con `npm run dev` puedo ver que el servidor se ha iniciado con éxito.

## Issue 3

Añadí una ruta que responde a peticiones GET en la ruta /holamundo con el mensaje "Hola mundo".

```JavaScript
app.get('/holamundo', (req, res) => {
  res.send('Hola mundo');
});
```

## Issue 4

Creo una función para devolver un emoji aleatorio:

```JavaScript
function randomEmoji(){
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    return emojis[Math.floor(Math.random() * emojis.length)];
}
```

He hecho un endpoint que envia el emoji:

```JavaScript
app.get('/emoji', (req, res) => {
    res.send(randomEmoji());
    });
```

## Issue 5

He creado una función para generar numeros aleatorios, y otra para devolver un elemento aleatorio de la lista:

```JavaScript
function random(n){
    return Math.floor(Math.random() * n);
}

function randomElement(arr){
    return arr[random(arr.length)];
}
```

Actualizo la función para devolver emojis aleatorios:

```JavaScript
function randomEmoji(...args){
  const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
  if(args.length === 0){
      return randomElement(emojis);
  }
  const nEmojis = args[0];
  const randomEmojis = [];
  for (let i = 0; i < nEmojis; i++) {
      randomEmojis.push(randomElement(emojis));
  }
  return randomEmojis;
}
```

Actualizo mi endpoint:

```JavaScript
app.get('/emoji', (req, res) => {
    const emojiNumber = parseInt(req.query.emojiNumber);
    emojiNumber ? res.send(randomEmoji(emojiNumber)) : res.send(randomEmoji());
  });
```

## Issue 6

He creado el endpoint `/saludo`, guardo la propiedad `accept` del header de la petición y devuelvo un saludo en el formato correspondiente:

```JavaScript
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

## Issue 7

Primero creo una carpeta a la que moveré las funciones exportadas llamada `scripts`.
Depués creo un archivo llamado `random.js` donde exportaremos las funciones.
A continuación muevo las funciones que ya tenía a `random.js` y con el siguiente código las exporto:

```JavaScript
module.exports = {
    random,
    randomElement,
    randomEmoji
};
```

Por último, importamos dichas funciones al archivo del servidor con el siguiente código:

```JavaScript
import { random, randomElement, randomEmoji } from './scripts/random.js';
```

## Issue 8

Primero, creo una carpeta a la que moveré los endpoints llamada `router`.
Dentro de esta carpeta creo un archivo llamado "rutasBasicas.js", donde defino un router que maneja estos endpoints.

```JavaScript
router.get('/', (req, res) => {
    res.send("Hello there!!!");
});

router.get('/emoji', (req, res) => {
   const emojiNumber = parseInt(req.query.emojiNumber);
   emojiNumber ? res.json(randomEmoji(emojiNumber)) : res.json(randomEmoji(1))
    res.json(randomEmoji(emojiNumber));

});

router.get('/saludo', (req, res) => {
    const accept = req.headers.accept; //La cabecera "accept" dice los tipos de contenido que el cliente puede procesar.
    if(accept === '*/*'){
        res.json({mensaje: ':D!'});
    } else if(accept === 'application/json'){
        res.json({mensaje: 'Hola!'});
    } else if(accept === 'text/html'){
        res.send('<h1>nice!</h1>');
    } else if (accept === 'text/plain'){
        res.send('hi!');
    } 
});
```

Y para importarlo y usarlo en mi app, lo haremos añadiendo en nuestro `server.js`, lo siguiente:

```JavaScript
const rutasBasicas = require('./routes/rutasBasicas.js')
app.use(rutasBasicas)
```

## Issue 9

A continuación, instalo morgan escribiendo lo siguiente en la consola:

```
npm install morgan
```

Posteriormente lo importo en el `server.js` utilizando lo siguiente:

```JavaScript
const morgan = require('morgan')
```

Y finalmente utilizo `app.use` con un preformateo de combined, pero hay muchos más.

```JavaScript
app.use(morgan('combined'))
```

## Issue 10

Creo una carpeta llamada `public`, dentro creo about.html, index.html y prueba.html. Posteriormente añadimos esta carpeta al servidor de Express para poder comprobarlo, y para esto tenemos que añadir lo siguiente:

```JavaScript
app.use(express.static("public"));
```

## Issue 11

Instalo Nunjucks con el siguiente comando en la consola:

```
npm install nunjucks
```

A continuación, creo una carpeta llamada views donde guardo el archivo `test.njk` donde hago algunas purebas de que muestre bien lo que quiero en el servidor:

```Nunjucks
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hola nunjucks</title>
</head>
<body>
  <h1>Nunjucks</h1>
  {% if username %}
  <p>Hola {{ username }}</p>
  {% else %}
  <p>Hola desconocido</p>
  {% endif %}

  <ul>
  {% for item in lista %}
    <li>{{ item }}</li>
  {% endfor %}
  
  </ul>
</body>
</html>
```