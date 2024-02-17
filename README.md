# Practica_express

Primera practica manejando backends

Para realizar la practica:

<<<<<<< HEAD

1. Crea una rama con tu nombre
2. Clona el repositorio
3. Ve a tu rama
4. Realiza tus cambios siguiendo los issues, no es necesario que crees ramas especificas para cada issue, pero si es necesario que hagas commits especificos y claros cuando resuelvas uno para ayudar a la revisión.
5. **NO** mandes un pull request a master, manda un pull request a tu rama.
6. Cuando termines, manda los cambios a tu rama en tu repositorio y luego a este repositorio.

## Issue 0

he arracando un proyecto de node con un `npm init -y` y he modificado un poco el `package.json`.

```json

"name": "practica_express",
  "description": "Primera practica manejando backends",
  "version": "1.0.0",
  "main": "index.js",
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"

  ```

## Issue 1

He instalado satisfactoriamente Express utilizando el siguiente comando `npm instal express`

## Issue 2

Endpoint creado con la función de mandar un mensaje a la consola en el script: ``/script_holiwi.js``

## Issue 3

Endpoint que genera aleatoriamente un emoji, emojis provenientes de una lista, uso:

```javascript
app.get('/emoji', (req, res) => {
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕'];

    const emojiNumber = req.query.emojiNumber;
    
    const randomEmo = random(emojis);
    res.send(randomEmo);
});
```

Esta función define una ruta en una aplicación Express.js que responde a solicitudes ``GET`` al endpoint ``/emoji``. Su objetivo es enviar un emoji aleatorio al cliente.

Funcionamiento:

`app.get('/emoji', (req, res) => {` : Define la ruta y el manejador de la solicitud.

`const emojis = ['', '', '', ...];` : Crea un array con emojis.

`const emojiNumber = req.query.emojiNumber;` : Obtiene el parámetro emojiNumber de la solicitud.

`const randomEmo = random(emojis);` : Selecciona un emoji aleatorio del array.

`res.send(randomEmo);`: Envía el emoji aleatorio como respuesta.

## Issue 4

Esta función genera un número aleatorio entre 0 y n (sin incluir n).

```JavaScript
function random(n) {
  return Math.floor(Math.random() * n);
}
```

La función randomElement(arr):

Devuelve un elemento aleatorio de un array.

```JavaScript
function randomElement(arr) {
  return arr[random(arr.length)];
}
```

``Función randomEmoji(...args):``

Si no se pasan argumentos, devuelve un emoji aleatorio.
Si se pasa un argumento como número entero, devuelve ese número de emojis aleatorios.

```JavaScript
function randomEmoji(...args) {
  const emojis = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  if (args.length === 0) {
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

## Issue 5

En el archivo ``servidor.js`` he agregado un código que permite mostrar diferentes respuestas según lo que se solicite. 

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

Para lograr esto, se utiliza un encabezado que captura el valor de accept, permitiendo elegir el tipo de contenido que se procesará. De esta manera, según el valor proporcionado en la URL, se mostrará un resultado distinto.

## Issue 6

Se ha creado una carpeta llamada ``scripts`` en el proyecto. Dentro de esta carpeta se ha añadido un archivo llamado ``random.js``. Las funciones previamente utilizadas se han implementado en ``random.js`` y se han exportado para su uso en otros archivos del proyecto.

Implementación en random.js
Se han escrito las funciones en el archivo ``random.js`` y se han exportado utilizando el siguiente código:

```JavaScript
module.exports = {
    random,
    randomElement,
    randomEmoji
};
```

Importación en servidor.js
Para utilizar estas funciones en el archivo principal del servidor, ``servidor.js``, se han importado de la siguiente manera:

```JavaScript
import { random, randomElement, randomEmoji } from './scripts/random.js';
```

Este cambio mejora la organización del código al separar las funciones en un archivo independiente.

## Issue 7

Se ha creado una carpeta llamada "router" en el proyecto para gestionar los endpoints ``/holamundo``, ``emoji`` y ``/saludo``. Dentro de esta carpeta se ha creado un archivo llamado "rutasBasicas.js", donde se ha definido un router que maneja estos endpoints.

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

## Issue 8

Para instalar ``Morgan``, ejecuta el siguiente comando en la terminal:

```JavaScript
npm install morgan
```

Después de instalar ``Morgan``, importa el módulo en tu archivo ``servidor.js`` de la siguiente manera:

```JavaScript
const morgan = require('morgan')
```

Luego, utiliza el middleware de Morgan con el formato de registro deseado. Por ejemplo, para utilizar el formato ``dev``, puedes agregar la siguiente línea a tu código:

```JavaScript
app.use(morgan('dev'))
```

## Issue 9

Hemos creado una carpeta llamada "public" en nuestro proyecto, donde almacenamos varios archivos HTML básicos para diferenciarlos, incluyendo "about.html", "index.html" y "prueba.html". Luego, los hemos agregado a nuestro servidor Express para su visualización.

```JavaScript
app.use(express.static("public"));
```

## Issue 10

Instalamos Nunjucks, escribiendo en la terminal lo siguiente:

```JavaScript
npm install nunjucks
```

Despues,creamos la carpeta views, y dentro creamos ``test.njk``, y dentro tenemos que poner cosas basicas para ir probando:

```nunjucks
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ninja nunjucks</title>
</head>
<body>
  <h1>Nunjucks</h1>
  {% if username %}
  <p>Hola {{ username }}</p>
  {% else %}
  <p>Tu quién ere?</p>
  {% endif %}

  <ul>
  {% for item in lista %}
    <li>{{ item }}</li>
  {% endfor %}
  
  </ul>
</body>
</html>
```

y configuramos en el servidor NunJucks:

```JavaScript
nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });
```

Y añadimos el endpoint siguiente:

```JavaScript
app.get("/hello_njk", (req, res) => {
    const { username } = req.query;
    const lista = ["a", "b", "c"];
    res.render("basico.njk", { username, lista });
  });
```

## Issue 11
  
Implementamos el endpoint ``test_njk``:
Se crea una ruta con método GET a la URL ``/test_njk``.
La función ``test_njk`` se encarga de renderizar la plantilla ``test.njk``.

```JavaScript
app.get("/test_njk", (req, res) => {
    res.render("test.njk", { username, password});
  });
```

## Issue 12

 Añadimos la estructura basica de HTML al test.njk, ponemos un titulo en h1, y utilizaremos el lenguaje de nunjucks para utilizar un valor de ``username`` y ``password``, y para esto se lo diremos mediante una query:

```JavaScript
app.get("/test_njk", (req, res) => {
    const { username } = req.query;
    const {password} = req.query;
    res.render("test.njk", { username, password});
  });
```

Luego insertamos lo siguiente  en nuestro archivo ``test.njk``:

```JavaScript
 <h1>Inicia sesión</h1>
  {% if username %}
  <p>Holiwi {{ username }}, tu password es {{ password }} un poco corta la verdad bro. </p>
  {% else %}
  <p>Hola desconocido, dame tu nombre : {{ username }} y {{ password }} para registrarte. </p>
  {% endif %}
```

## Issue 13

Se agregaron condiciones if para mostrar mensajes diferentes según la información en la URL:

Sin ``username`` ni ``password``: "No ingresaste usuario/contraseña".

Solo ``username``: "Hola {{username}}! No ingresaste contraseña".

Solo ``password``: "No ingresaste usuario. Tu contraseña es {{password}}".

Con ``username`` y ``password``: "Hola {{username}}! Tu contraseña es {{password}}".


```JavaScript
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

```JavaScript

```

```JavaScript

```

```JavaScript

```

```JavaScript

```

```JavaScript

```

```JavaScript

```

```JavaScript

```

```JavaScript

```
