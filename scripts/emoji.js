function randomEmoji(){
  
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    
    const Emoji = emojis[Math.floor(Math.random() * emojis.length)];
    return Emoji
  }
  
  function multipleEmoji(number){
     const emojis = []
     for (let i = 0; i < number; i++){
       emojis.push(randomEmoji())
     }
     return emojis
  }