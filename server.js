const express = require('express');
const app = express();

app.use(express.json())

app.get('/holamundo', (req, res) => {
    res.send('Hola Mundo');
    });

function random(n){ //función para devolver un número aleatorio entre 0 y n
    return Math.floor(Math.random() * n);
}

function randomElement(arr){ //función para devolver un elemento aleatorio de un array
    return arr[random(arr.length)];
}

function randomEmoji(...args){ //función para devolver un emoji aleatorio o n emojis aleatorios
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

app.get('/emoji', (req, res) => {
    const emojiNumber = parseInt(req.query.emojiNumber);
    emojiNumber ? res.send(randomEmoji(emojiNumber)) : res.send(randomEmoji());
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

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
    });