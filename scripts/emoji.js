function randomEmoji(){
  const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  return emoji;
}

function multipleEmoji(number){
  const emojis = []
  for(let i = 0; i < number; i++){
      emojis.push(randomEmoji())
  }
  return emojis
}

module.exports = { randomEmoji, multipleEmoji }