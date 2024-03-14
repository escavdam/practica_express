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

Para este issue numero tres he creado un js donde empezare añadir todo lo relacionado para enviar una respuesta, para ello añadi lo siguiente:

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

Para este cuarto issue he creado una funcion la cual me dara un emoji random

```js
function randomEmoji(){
  
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    
    const Emoji = emojis[Math.floor(Math.random() * emojis.length)];
    return Emoji
  }

```
Despues de crear la funcion empece haciendo un endpoint en cual creare un array llamado emoji el cual se lo meteremos a la funcion que creamos anteriormente.

```js
app.get('/emoji', (req, res) => {
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕'];
    const randomEmojis = randomEmoji(emojis);
    res.send(randomEmojis);
});

```
Todo esto lo encontramos en el `index.js` pero más adelante lo diviremos en diferentes scripts para que todo quede más ordenado


# Issue 5

En este quinto issue y durante su realizacion he movido todo lo referente a emojis a un script a parte llamado `emoji.js` y este lo comunicare con los otros scripts haciendo uso de `module.export`. Siguiendo con las instrucciones del issue he creado una funcion llamada `multipleEmoji()` la cual nos develvera un emoji random

```js

function multipleEmoji(number){
     const emojis = []
     for (let i = 0; i < number; i++){
       emojis.push(randomEmoji())
     }
     return emojis
  }
```

Despues modificamos el endpoint del anterior que creamos con el otro isssue. En este cambio lo que hacemos es que nuestro endpoint pueda recibir el numero de emojis que queramos que aparezcan a travez de la url, es decir hacer lo que hace la funcion pero en el endpoint.


# Issue 6 

Para este sexto issue, empiezo poniendo lo siguiente

```js
app.get('/saludo', (req, res) => {
    const accept = req.headers.accept; 
    if(accept === '*/*'){
        res.json({mensaje: 'HolaHolita!!!'});
    } else if(accept === 'application/json'){
        res.json({mensaje: 'HolaHolita!!!'});
    } else if(accept === 'text/html'){
        res.send('<h1>HolaHolita!!!</h1>');
    } else if (accept === 'text/plain'){
        res.send('HolaHolita!!!');
    } 
});
```

Esto es para que dependiendo de lo que solicitemos a la url esta nos muestre en pantalla una cosa u otra, para que esto funcionara use un header que capture lo que valga nuestra constante de `accept` y con esta informacion nos mostrara una cosa u otra todo esto ha base de conprovaciones a travez de if y else if(muchos de estos)

# Issue 7

Para este issue me adelante demasiado y lo comente donde no era (en el issue 5), pero bueno lo vuelvo a comentar. Para este issue he creado otros scripts para separar las diferentes funciones que tendra este codigo, cuando cree el otro script le puse al final del codigo lo siguiente 

```js
module.exports = {randomEmoji, multipleEmoji}
```

Y para despues utilizarlo en el codigo que yo quisiera use lo siguiente 

```js
const {randomEmoji, multipleEmoji} = require(`./scripts/emoji`)
```

# Issue 8 



