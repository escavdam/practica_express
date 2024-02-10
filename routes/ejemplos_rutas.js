const express = require( 'express' );
const router = express.Router();

router.get("/ruta_parametrica/:mi_dato", (req, res) => {
    console.log(req.params.mi_dato);
    res.send(`me electrocutaste ${req.params.mi_dato}`);
});

router.post("/usuario/:username/:password", (req, res) => {
    console.log(req.params.username);
    console.log(req.params.password);

const { username, password } = req.params;
    res.send(`me electrocutaste ${username} y ${password}`);
});
router.get("/ruta_query", (req, res) => {
    console.log(req.query.id);
    re.end();
});

const { randomEmoji, multipleEmoji } = require("../scripts/emoji");

router.get('/emojis', (req, res) => {
  const { emojiNumber } = req.query;

  if (!emojiNumber || isNaN(emojiNumber) || emojiNumber <= 0) {
    res.status(400).json({ error: 'Número de emojis no válido' });
    return;
  }

  const emojis = emojiNumber > 1 ? multipleEmoji(emojiNumber) : [randomEmoji()];

  res.json({ emojis });
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});