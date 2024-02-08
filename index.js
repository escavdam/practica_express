const express = require(`express`)

const app = express();

app.get(`/`, (req, res) => {
 res.send("hola mundo")
});


app.get(`/emoji`, (req, res) => {
  const emoji = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']

  const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  res.send(randomEmoji)
});

app.listen(3000, () => {
    console.log(`Se ha iniciado!!!!!`)
  });