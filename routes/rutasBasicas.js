const express = require('express')
const router = express.Router()


function random(n) {
    return Math.floor(Math.random() * n);
}

function randomElement(arr) {
    return arr[random(arr.length)];
}

function randomEmoji(number) {
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕'];
    const emojiList = [];
    for (let i = 0; i < number; i++) {
        emojiList.push(randomElement(emojis));
    }
    return emojiList;
}


router.get('/', (req, res) => {
    res.send("Hello there!!!");
});

router.get('/emoji', (req, res) => {
   const emojiNumber = parseInt(req.query.emojiNumber);
   emojiNumber ? res.json(randomEmoji(emojiNumber)) : res.json(randomEmoji(1))
    res.json(randomEmoji(emojiNumber));

});

router.get('/saludo', (req, res) => {
    const accept = req.headers.accept; 
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