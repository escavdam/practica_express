const express = require('express');
const nunjucks = require("nunjucks");
const morgan = require('morgan')
const fs = require ('fs')

//crear app
const app = express();

//Importo las funciones que he utilizado.
const { random, randomElement, randomEmoji } = require('./scripts/random.js');

//configuracion morgan
app.use(morgan('combined'))

//creamos una carpeta estatica en nuestro servidor
app.use(express.static("public"));

//configuramos nunjucks
nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });

//router
const rutasBasicas = require('./routes/rutasBasicas.js')
app.use(rutasBasicas)


//Funciones en mi archivo de scripts

//Endpoints
app.get("/test_njk", (req, res) => {
    const { username } = req.query;
    const {password} = req.query;
    res.render("test.njk", { username, password});
  });

  app.get('/create/:file/:body', (req, res) => {
    const fileName = req.params.file;
    const fileContent = req.params.body;
  
    fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
          console.log(err);
          return 
        }
        console.log("Archivo creado");
        
    });
});

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
