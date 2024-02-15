//importaciones
const express = require('express');
const morgan = require('morgan')
const nunjucks = require('nunjucks')
const fs = require('fs')
const { randomEmoji, multipleEmoji } = require('./scripts/emoji.js')

//crear la app
const app = express();

app.use(express.static('public'))

//configuracion
app.use(morgan(':method :remote-addr :url :status :res[content-length] - :response-time ms'))

//router
const ejemplosRutas = require('./routes/ejemplosRutas.js');
const { error } = require('console');
app.use(ejemplosRutas)

//njk
nunjucks.configure("views", {
    autoescape:true,
    express:app
});

app.get("/test_njk", (req, res) =>{
    const {username} = req.query;
    const {password} = req.query;
    const lista = ["a", "b", "c"];
    res.render("test.njk", { username, password, lista });
});


app.get("/create/:file/:body", (req, res) =>{
    const fileContent = req.params.file
    const bodyContent = req.params.body
    
    fs.writeFileSync(fileContent, bodyContent)
    res.send(`Archivo ${fileContent} creado con ${bodyContent}`);
})

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