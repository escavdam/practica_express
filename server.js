//importaciones
const express = require('express');
const morgan = require('morgan')
const { randomEmoji, multipleEmoji } = require('./scripts/emoji.js')

//crear la app
const app = express();

//configuracion
app.use(morgan(':method :remote-addr :url :status :res[content-length] - :response-time ms'))

//router
const ejemplosRutas = require('./routes/ejemplosRutas.js')
app.use(ejemplosRutas)

//rutas
app.get('/', (req, res) => {
    res.send('Hola mundo');
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