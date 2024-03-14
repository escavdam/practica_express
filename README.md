# practica_express
Primera practica manejando backends

Para realizar la practica:

<<<<<<< HEAD
1. Crea una rama con tu nombre
2. Clona el repositorio
3. Ve a tu rama
4. Realiza tus cambios siguiendo los issues, no es necesario que crees ramas especificas para cada issue, pero si es necesario que hagas commits especificos y claros cuando resuelvas uno para ayudar a la revisión.
5. **NO** mandes un pull request a master, manda un pull request a tu rama.
6. Cuando termines, manda los cambios a tu rama en tu repositorio y luego a este repositorio.


# Issue 1

He arrancado un proyecto de node con `npm init -y` y he modificado un poco el `package.json`. (en el json apuntar en el autor mi nombre)

```json

{
  "name": "practica_express",
  "version": "1.0.0",
  "description": "Primera practica manejando backends",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Alejandro",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```




# Issue 2

En primer lugar, inserte en la consola de code `npm install express` 


# Issue 3

Para este issue dos he creado un js donde empezare añadir todo lo relacionado para enviar una respuesta, para ello añadi lo siguiente:

```js

const express = require(`express`)

const app = express();

app.get(`/`, (req, res) => {
 res.send("hola mundo")
});
app.listen(3000, () => {
    console.log(`Se ha iniciado!!!!!`)
  });
```
En la primera linea importo la libreria de express, en la segunda linea la instancio, en las ultimas lineas lo que hago es crear una respuesta simple 


# Issue 4 

Para este tercer issue he creado una funcion la cual me dara un emoji random

```js
function random(array) {
    const randomEmojiIndex = Math.floor(Math.random() * array.length);
    return array[randomEmojiIndex];
}

```
Despues de crear la funcion empece haciendo un endpoint en cual creare un array llamado emoji el cual se lo meteremos a la funcion que creamos anteriormente.

```js
app.get('/emoji', (req, res) => {
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕'];
    const randomEmo = random(emojis);
    res.send(randomEmo);
});

```
Todo esto lo encontramos en el `index.js` pero más adelante lo diviremos en diferentes scripts para que todo quede más ordenado


# Issue 5

En este cuarto issue y durante su realizacion he movido todo lo referente a emojis a un script a parte llamado `emoji.js`. Seguiendo con las instrucciones del issue 

