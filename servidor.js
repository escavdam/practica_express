const express = require('express');

const morgan = require('morgan')

//crear app
const app = express();

//configuracion
app.use(morgan('combined'))

//router
const ejemploRutas = require('./routes/ejemploRutas.js')
app.use(ejemploRutas)

//Puedo quitar las funciones del script ya que las tengo en ejemploRutas.js que esta dentro de la carpeta de routes.


app.get('/', (req, res) => {
    res.send("Hola Makina");
});

app.get('/emoji', (req, res) => {
   const emojiNumber = parseInt(req.query.emojiNumber);
   emojiNumber ? res.json(randomEmoji(emojiNumber)) : res.json(randomEmoji(1))
    res.json(randomEmoji(emojiNumber));

});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto localhost:3000');
});
