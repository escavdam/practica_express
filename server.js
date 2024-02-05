const express = require('express');
const app = express();

app.get('/holamundo', (req, res) => {
    res.send('Hola Mundo');
    });

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
    });