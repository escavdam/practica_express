const express = require("express"); 

const app = express(); 

app.get("/", (req, res) => {
  res.send("Ole los caracoleees (hola mundo)");
});

const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']