function random(n){
    return Math.floor(Math.random() * n);
};
  
function randomElement(arr){
    return arr[random(arr.length)];
};
  
function randomEmoji(...args){
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    if(args.length === 0){
        return randomElement(emojis);
    }
    const nEmojis = args[0];
    const randomEmojis = [];
    for (let i = 0; i < nEmojis; i++) {
        randomEmojis.push(randomElement(emojis));
    }
    return randomEmojis;
};

module.exports = {
    random,
    randomElement,
    randomEmoji
  };