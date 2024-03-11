const express = require('express');
const app = express();
const rutasBasicas = require('./router/rutasBasicas.js')
app.use(rutasBasicas)

app.listen(3000, () => {
  console.log('Hemos iniciado el servidor 3000!');
});