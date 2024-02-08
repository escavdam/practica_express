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

