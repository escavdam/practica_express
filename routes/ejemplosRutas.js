const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const app = express();



app.use(morgan("combined"))

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