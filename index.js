//importaciones
const express = require('express');
const morgan = require('morgan')
const { randomEmoji, multipleEmoji } = require('./scripts/emoji.js')

//crear la app
const app = express();

//configuracion morgan
app.use(morgan('dev'))

//creamos una carpeta estatica en nuestro servidor
app.use(express.static("public"));

//configuración necesaria para Nunjucks
nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });

  app.get("/hello_njk", (req, res) => {
    const { username } = req.query;
    const lista = ["a", "b", "c"];
    res.render("basico.njk", { username, lista });
  });

//router
const ejemplosRutas = require('./routes/ejemplosRutas.js')
app.use(ejemplosRutas)

//rutas
app.get('/', (req, res) => {
    res.send('Hola mundo');
});
// rutas njk
app.get("/test_njk", (req, res) => {
    const { username } = req.query;
    const {password} = req.query;
    res.render("test.njk", { username, password});
  });

app.get('/emoji', (req, res) => {
    //comprobar si el usuario envio emojiNumber en el query
    const emojiNumber = req.query.emojiNumber
    emojiNumber ? res.send(multipleEmoji(emojiNumber)) : res.send(randomEmoji())
})

app.get('/saludo', (req, res) => {
    const accept = req.headers.accept;
    if(accept === '*/*'){
        res.json({mensaje: 'Hola!'});
    } else if(accept === 'application/json'){
        res.json({mensaje: 'Hola!'});
    } else if(accept === 'text/html'){
        res.send('<h1>Hola!</h1>');
    } else if (accept === 'text/plain'){
        res.send('Hola!');
    } else {
        res.status(406).send('Not Acceptable');
    }
});


//arrancar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});