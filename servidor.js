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

app.get('/saludo', (req, res) => {
    const accept = req.headers.accept; //La cabecera "accept" dice los tipos de contenido que el cliente puede procesar.
    if(accept === '*/*'){
        res.json({mensaje: 'Hola!'});
    } else if(accept === 'application/json'){
        res.json({mensaje: 'Hola!'});
    } else if(accept === 'text/html'){
        res.send('<h1>Hola!</h1>');
    } else if (accept === 'text/plain'){
        res.send('Hola!');
    } 
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto localhost:3000');
});
