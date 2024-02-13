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

Endpoint creado con la función de mandar un mensaje a la consola en el script: /script_holiwi.js

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

Esta función define una ruta en una aplicación Express.js que responde a solicitudes GET al endpoint /emoji. Su objetivo es enviar un emoji aleatorio al cliente.

Funcionamiento:

`app.get('/emoji', (req, res) => {` : Define la ruta y el manejador de la solicitud.

`const emojis = ['', '', '', ...];` : Crea un array con emojis.

`const emojiNumber = req.query.emojiNumber;` : Obtiene el parámetro emojiNumber de la solicitud.

`const randomEmo = random(emojis);` : Selecciona un emoji aleatorio del array.

`res.send(randomEmo);`: Envía el emoji aleatorio como respuesta.

## Issue 4

