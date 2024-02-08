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




