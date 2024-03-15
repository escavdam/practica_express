const express = require(`express`)
const router = express.Router()
const app = express();

app.get(`/`, (req, res) => {
    res.send("hola mundo")
   });
   
   router.get('/emoji', (req, res) => {
     const emojiAmount = parseInt(req.query.emojiAmount);
     emojiAmount ? res.json(multipleEmoji(emojiAmount)) : res.json(multipleEmoji(1))
      res.json(multipleEmoji(emojiAmount));
   
   });
   
   router.get('/saludo', (req, res) => {
     const accept = req.headers.accept; 
     if(accept === '*/*'){
         res.json({mensaje: 'HolaHolita!!!'});
     } else if(accept === 'application/json'){
         res.json({mensaje: 'HolaHolita!!!'});
     } else if(accept === 'text/html'){
         res.send('<h1>HolaHolita!!!</h1>');
     } else if (accept === 'text/plain'){
         res.send('HolaHolita!!!');
     } 
   });
   module.exports = router