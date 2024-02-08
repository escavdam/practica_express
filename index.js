const express = require("express"); 
const { randomEmoji, multipleEmoji } = require(`./scripts.js/emoji`)
const app = express();
const ejemplos_rutas = require(`./routes/ejemplosRutas`);

app.get("/", (req, res) => {
  res.send("Ole los caracoleees (hola mundo)");
});

app.get('/emoji', (req, res) => {
  const emojis = [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🥝",
    "🍅",
    "🥥",
    "🥑",
    "🍆",
    "🥔",
    "🥕",
  ];

  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmo = emojis[randomIndex];

  res.send(randomEmo);
});


app.listen(3000, () => {
  console.log("servidor express iniciado en el puesto 3000");
});