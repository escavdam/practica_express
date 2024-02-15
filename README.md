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

# ISSUE 3

He añadido una ruta que responde a peticiones GET en la ruta ``/routes`` con el mensaje "Hola mundo". En ``ejemplosRutas.js``.
```
router.get('/ruta_parametrica/:id', (request, response) => {
    console.log(request.params.id);
    response.send('Hola Mundo')
})
```

# ISSUE 4

Creo una función que nos devuelve un emoji aleatorio:
```
function randomEmoji(){
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    return emojis[Math.floor(Math.random() * emojis.length)];
}
```
Y hacemos un endpoint que nos envia un emoji:
````
app.get('/emoji', (req, res) => {
    res.send(randomEmoji());
    });
````
# ISSUE 5

Creamos una función para generar números aleatorios y otra para devolver un elemento aleatorio de la lista.

```
function random(n){ //función para devolver un número aleatorio entre 0 y n
    return Math.floor(Math.random() * n);
}

function randomElement(arr){ //función para devolver un elemento aleatorio de un array
    return arr[random(arr.length)];
}
```
Y creamos una función para devolver emojis aleatorios:
```
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
Y actualiazamos el endpoint:
```
app.get('/emoji', (req, res) => {
    const emojiNumber = parseInt(req.query.emojiNumber);
    emojiNumber ? res.send(randomEmoji(emojiNumber)) : res.send(randomEmoji());
    });
```
# ISSUE 6

Creamos el endpoint ``/saludo`` guardamos la propiedad ``accept`` del header de la petición y devuelvo un saludo en el formato correspondiente:

```
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
