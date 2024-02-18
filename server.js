const express = require('express');
const app = express();

app.get('/holamundo', (req, res) => {
  res.send('Hola mundo');
});

app.get('/emoji', (req, res) => {
  const emojiNumber = parseInt(req.query.emojiNumber);
  emojiNumber ? res.send(randomEmoji(emojiNumber)) : res.send(randomEmoji());
});

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

app.listen(3000, () => {
  console.log('Hemos iniciado el servidor 3000!');
});

import { random, randomElement, randomEmoji } from './scripts/random.js';