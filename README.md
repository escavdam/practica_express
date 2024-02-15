# practica_express
Primera practica manejando backends

Para realizar la practica:

1. Crea una rama con tu nombre
2. Clona el repositorio
3. Ve a tu rama
4. Realiza tus cambios siguiendo los issues, no es necesario que crees ramas especificas para cada issue, pero si es necesario que hagas commits especificos y claros cuando resuelvas uno para ayudar a la revisión.
5. **NO** mandes un pull request a master, manda un pull request a tu rama.
6. Cuando termines, manda los cambios a tu rama en tu repositorio y luego a este repositorio.


# Resolución de issues.
## Issue 0
Inicie el proyecto en node:

```bash
npm init -y
```

Configuré mi `package.json`:

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
  "author": "camacho",
  "license": "ISC"
}
```

## Issue 1
Instalé express con el siguiente comando:

```bash
npm install express
```

Y añadí un script en js para iniciar el servidor:
```javascript
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
    });

```
Y en nuestro json añadimos lo siguiente:
```json
{
  "scripts": {
    "dev": "node server.js"
  }
}
```
## Issue 2
En el archivo `servidor.js` añadi el siguiente contenido al que ya tenía para que devuelva "hola mundo":
```javascript
app.get('/',(req,res) => {
    res.send("hola mundo")
}); 
```
Esto lo que hará es que apartir de la app que hemos creado antes, la ejecute y luego hago que la app la escuche en el puerto 3000.
Para comprobar que el servidor se ha iniciado con exito podemos poner  `npm run dev`.

## Issue 3
En el archivo `servidor.js` añadi el siguiente contenido al que ya tenía para que devuelva de manera aleatoria los emojis:
```javascript
app.get('/emoji', (req, res) => {
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕'];
    const randomEmo = random(emojis);
    res.send(randomEmo);
});
```
Y antes de eso tendras que crear una funcion para que devuelva un valor random de la siguiente manera:
```javascript
function random(array) {
    const randomEmojiIndex = Math.floor(Math.random() * array.length);
    return array[randomEmojiIndex];
}
```
Hay que tener en cuenta que tiene que ser Index, para que pueda coger el emoji correspondiente ya que se encuentra en un indice y luego lo devuelva

## Issue 4
En el archivo `servidor.js` añadi el siguiente contenido al que ya tenía para que devuelva varios datos o 1 dato, dependiendo de lo que escribamos en la url:
```javascript
function randomEmoji(number) {
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕'];
    const emojiList = [];
    for (let i = 0; i < number; i++) {
        emojiList.push(randomElement(emojis));
    }
    return emojiList;
}
```
Esto lo que hace es generar una lista de emojis aleatorios basada en el numero proporcionado como elemento.

Luego debemos, modificar el endpoint que teniamos antes para aplicar los cambios aplicados:
```javascript
app.get('/emoji', (req, res) => {
   const emojiNumber = parseInt(req.query.emojiNumber);
   emojiNumber ? res.json(randomEmoji(emojiNumber)) : res.json(randomEmoji(1))
    res.json(randomEmoji(emojiNumber));

});
```
En este codigo realizamos que si se proporciona el parámetro 'emojiNumber' en la URL, la cantidad de emojis en la respuesta será igual a ese número; de lo contrario, se devolverá un solo emoji.

## Issue 5
En el archivo `servidor.js` añadi el siguiente contenido para que dependiendo de lo que estemos solicitando me muestre una cosa diferente, y para eso tendremos que 
utilizar un header que captura el valor de accept y con el que se podra elegir que tipo de contenido va a procesar:
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
    } 
});
```

De esta forma lo que hara el headers es añadirle un valor a accept, para que dependiendo del valor que pongamos en la URL, nos mostrará una cosa diferente.

## Issue 6
En este caso creamos una carpeta llamada scripts, y en la cual añadiremos `random.js`. Como nos pide que exportemos las funciones a este js, escribimos las funciones que hemos utilizado anteriormente, la implementamos en `random.js`, y como es EXPORTAR, tenemos que añadir esto:
```javascript
module.exports = {
    random,
    randomElement,
    randomEmoji
};
```
Esto lo que hace es exportar las funciones que tenemos en nuestro script de `servidor.js`.
Y luego nos pide importar dichas funciones en `servidor.js`, por lo que tendremos que hacer lo siguiente.
```javascript
import { random, randomElement, randomEmoji } from './scripts/random.js';
```
## Issue 7
Creamos una carpeta llamada router y añadimos un script llamado `rutasBasicas.js`. En este script, añadiremos los endpoints que tenemos en nuestro `servidor.js`, es decir /, /emoji y /saludo, pero en vez de usar app.get, usaremos router.use ya que estamos utilizando un router, quedaría asi:
```javascript
router.get('/', (req, res) => {
    res.send("Hola Makina");
});

router.get('/emoji', (req, res) => {
   const emojiNumber = parseInt(req.query.emojiNumber);
   emojiNumber ? res.json(randomEmoji(emojiNumber)) : res.json(randomEmoji(1))
    res.json(randomEmoji(emojiNumber));

});

router.get('/saludo', (req, res) => {
    const accept = req.headers.accept; //La cabecera "accept" dice los tipos de contenido que el cliente puede procesar.
    if(accept === '*/*'){
        res.json({mensaje: 'Hola!'});
    } else if(accept === 'application/json'){
        res.json({mensaje: 'Hola!'});
    } else if(accept === 'text/html'){
        res.send('<h1>Hola!</h1>');
    } else if (accept === 'text/plain'){
        res.send('Hola!');
    } 
});
```
Y para importarlo y usarlo en mi app, lo haremos añadiendo en nuestro `servidor.js`, lo siguiente:
```javascript
const rutasBasicas = require('./routes/rutasBasicas.js')
app.use(rutasBasicas)
```
## Issue 8
Vamos a descargar morgan, para ellos en la terminal escribiremos lo siguiente:
```bash
npm install morgan
```
Posteriormente lo importamos en nuestro `servidor.js`, y utilizaremos lo siguiente:
```javascript
const morgan = require('morgan')
```
Y finalmente utilizaremos app.use con un preformateo de combined, pero hay muchos más.
```javascript
app.use(morgan('combined'))
```

## Issue 9
Creamos una carpeta que llamaremos public, y dentro creamos varios HTML basicos para diferenciarlo. En este caso he creado `about.html`, `index.html` y `prueba.html`.
Posteriormente la añadimos a nuestro servidor Express para poder comprobarlo, y para esto tenemos que añadir lo siguiente:
```javascript
app.use(express.static("public"));
```
## Issue 10
Instalamos Nunjucks, y para eso tenemos que poner lo siguiente:
```bash
npm install nunjucks
```
Posteriormente, tenemos que crear una carpeta que llamaremos views, y dentro creamos `test.njk`, y dentro tenemos que poner cosas basicas para ir probando:
```nunjucks
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
Sin olvidarnos de configurarlo correctamente en nuestro servidor:
```javascript
nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });
```
Y añadimos el endpoint siguiente:
```javascript
app.get("/hello_njk", (req, res) => {
    const { username } = req.query;
    const lista = ["a", "b", "c"];
    res.render("basico.njk", { username, lista });
  });
```

## Issue 11
Creamos un endpoint llamado `test_njk`, con una petición `get` y luego un `res.render` para poder verlo en la plantilla de `test.njk`, y lo haremos de la siguiente manera:
```javascript
app.get("/test_njk", (req, res) => {
    res.render("test.njk", { username, password});
  });
```
## Issue 12
Luego añadimos la estructura basica de HTML a nuestro `test.njk`, ponemos un titulo en h1, y utilizaremos el tipo de lenguaje de nunjucks para utilizar un valor de `username` y `password`, y para esto tendremos que pasarlo mediante una query:
```javascript
app.get("/test_njk", (req, res) => {
    const { username } = req.query;
    const {password} = req.query;
    res.render("test.njk", { username, password});
  });
```
Esto para el query de nuestro `username` y `password`.
Y luego en el `test.njk`, pondremos esto:
``` nunjucks
<h1>Inicia sesión</h1>
  {% if username %}
  <p>Hola {{ username }}, la contraseña que tiene registrada es {{ password }} </p>
  {% else %}
  <p>Hola desconocido, tienes que escribir tu{{ username }} y {{ password }} para loguearte o registrarte.  </p>
  {% endif %}
```
Y para poder acceder al endpoint tenemos que escribir lo siguiente en la URL:
`http://localhost:3000/test_njk?username=camacho&password=12345`

## Issue 13
Para que nos devuelva diferentes mensajes cuando el usuario envie `username` o `password` tenemos que modificar el endpoint de `/test_njk`, para ello lo haremos de la siguiente manera:
``` nunjucks
  {% if username %}
    <p>Hola {{ username }}!</p>
  {% else %}
    <p>No ingresaste el usuario</p>
  {% endif %}

  {% if password %}
    <p>Tu contraseña es {{ password }}</p>
  {% else %}
    <p>No ingresaste la contraseña</p>
  {% endif %}
```
Aquí vemos que separamos `username` con un else, para los diferentes casos que se pueda dar si lo escribe o no lo escribe, y que dependiendo de eso aparezca un mensaje u otro. En el caso de `password` pasa lo mismo, dependiendo del caso que se ejecute, se escribirá un mensaje u otro.


