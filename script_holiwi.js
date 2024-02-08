const express = require("express"); 

const app = express(); 

app.get("/", (req, res) => {
  res.send("Ole los caracoleees (hola mundo)");
});

app.get('/emoji', (req, res) => {
  const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕'];

  const emojiNumber = req.query.emojiNumber;
  
  const randomEmo = random(emojis);
  res.send(randomEmo);
});