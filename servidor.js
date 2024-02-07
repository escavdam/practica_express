const express = require('express');
const app = express();

function random(array) {
    const randomEmojiIndex = Math.floor(Math.random() * array.length);
    return array[randomEmojiIndex];
}

app.get('/', (req, res) => {
    res.send("Hola Mundo");
});

app.get('/emoji', (req, res) => {
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕'];

    const emojiNumber = req.query.emojiNumber;
    
    const randomEmo = random(emojis);
    res.send(randomEmo);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
