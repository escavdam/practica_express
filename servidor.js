const express = require('express');
const app = express();

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

app.get('/', (req, res) => {
    res.send("Hola Mundo");
});

app.get('/emoji', (req, res) => {
   const emojiNumber = parseInt(req.query.emojiNumber);
   emojiNumber ? res.json(randomEmoji(emojiNumber)) : res.json(randomEmoji(1))
    res.json(randomEmoji(emojiNumber));

});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto localhost:3000');
});
