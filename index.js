const express = require(`express`)
const app = express();
const {randomEmoji, multipleEmoji} = require(`./scripts/emoji`)
const morgan = require(`morgan`)

//config
app.use(morgan(`combined`))


//


//router
const ejemplosRutas = require (`./routes/ejemplos_rutas.js`)
app.use(ejemplosRutas)

const rutas = require(`./routes/rutas.js`)
app.use(rutas)
//


app.get(`/`, (req, res) => {
 res.send("hola mundo")
});

app.get('/emoji', (req, res) => {
  const emojiAmount = parseInt(req.query.emojiAmount);
  emojiAmount ? res.json(multipleEmoji(emojiAmount)) : res.json(multipleEmoji(1))
   res.json(multipleEmoji(emojiAmount));

});

app.get('/saludo', (req, res) => {
  const accept = req.headers.accept; 
  if(accept === '*/*'){
      res.json({mensaje: 'HolaHolita!!!'});
  } else if(accept === 'application/json'){
      res.json({mensaje: 'HolaHolita!!!'});
  } else if(accept === 'text/html'){
      res.send('<h1>HolaHolita!!!</h1>');
  } else if (accept === 'text/plain'){
      res.send('HolaHolita!!!');
  } 
});

app.listen(3000, () => {
    console.log(`Se ha iniciado!!!!! en http://localhost:3000`)
  });