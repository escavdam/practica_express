const express = require('express');

const morgan = require('morgan')

//crear app
const app = express();

//Importo las funciones que he utilizado.
const { random, randomElement, randomEmoji } = require('./scripts/random.js');

//configuracion morgan
app.use(morgan('combined'))

app.use(express.static("public"));

//router
const rutasBasicas = require('./routes/rutasBasicas.js')
app.use(rutasBasicas)


//Funciones en mi archivo de scripts

//Endpoints
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

//inicio servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto localhost:3000');
});
