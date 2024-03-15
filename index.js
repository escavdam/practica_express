const express = require(`express`)
const app = express();
const {randomEmoji, multipleEmoji} = require(`./scripts/emoji`)
const morgan = require(`morgan`)
const nunjucks = require("nunjucks");


app.use(morgan(`combined`))

nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });

  const rutas = require(`./routes/rutas.js`)
  app.use(rutas)
  
  app.get("/pruebas_njk", (req, res) => {
      const { username } = req.query;
      const lista = ["a", "b", "c"];
      res.render("test.njk", { username, lista });
    });

app.use(express.static("public"));

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