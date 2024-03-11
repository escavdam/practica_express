const express = require('express');
const app = express();
const morgan = require('morgan');
const rutasBasicas = require('./router/rutasBasicas.js');
app.use(morgan('combined'));
app.use(rutasBasicas);
app.use(express.static("public"));

app.listen(3000, () => {
  console.log('Hemos iniciado el servidor 3000!');
});