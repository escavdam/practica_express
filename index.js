const express = require(`express`)

const app = express();

app.get(`/`, (req, res) => {
 res.send("hola mundo")
});


app.get(`/emoji`, (req, res) => {
  const emojiNumber = req.query.emojiNumber
  
  emojiNumber ? res.send(multipleEmoji(emojiNumber)) : res.send(randomEmoji())

  /*if(emojiNumber){
    res.send(multipleEmoji(emojiNumber))
  }else{
    res.send(randomEmoji())
  }*/
});


app.listen(3000, () => {
    console.log(`Se ha iniciado!!!!!`)
  });