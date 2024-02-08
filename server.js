const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.get('/holamundo', (req, res) => {
    res.send('Hola mundo');
  });

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

app.get('/emoji', (req, res) => {
    const emojiNumber = parseInt(req.query.emojiNumber); //guarda el valor del query parameter emojiNumber y conviertelo a entero
    emojiNumber ? res.send(randomEmoji(emojiNumber)) : res.send(randomEmoji()); //si emojiNumber existe, devuelve n emojis, si no, devuelve 1 emoji
    });


    function random(n){ //función para devolver un número aleatorio entre 0 y n
        return Math.floor(Math.random() * n);
    }
    
    function randomElement(arr){ //función para devolver un elemento aleatorio de un array
        return arr[random(arr.length)];
    }
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