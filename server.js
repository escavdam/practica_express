const express = require('express');
const app = express();

app.get('/holamundo', (req, res) => {
  res.send('Hola mundo');
});

function randomEmoji(){
  const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
  return emojis[Math.floor(Math.random() * emojis.length)];
}

app.get('/emoji', (req, res) => {
  res.send(randomEmoji());
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});