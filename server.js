const express = require('express');
const app = express();

function random(n){
  return Math.floor(Math.random() * n);
}

function randomElement(arr){
  return arr[random(arr.length)];
}

function randomEmoji(...args){
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

app.get('/holamundo', (req, res) => {
  res.send('Hola mundo');
});

app.get('/emoji', (req, res) => {
  const emojiNumber = parseInt(req.query.emojiNumber);
  emojiNumber ? res.send(randomEmoji(emojiNumber)) : res.send(randomEmoji());
});

app.listen(3000, () => {
  console.log('Hemos iniciado el servidor 3000!');
});