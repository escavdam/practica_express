const express = require( " express " ); 
const morgan = require( " morgan " )
const { randomEmoji, multipleEmoji } = require(`./scripts.js/emoji`)
const ejemplos_rutas = require(`./routes/ejemplosRutas`);


// crear app
const app = express();

//configuración
app.use(morgan('combined'))

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