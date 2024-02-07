const express = require('express');
const app = express();

app.get('/holamundo', (req, res) => {
    res.send('Hola Mundo');
    });

function randomEmoji(){
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    return emojis[Math.floor(Math.random() * emojis.length)];
}
app.get('/emoji', (req, res) => {
    res.send(randomEmoji());
    });

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
    });