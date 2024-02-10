function random(n) {
    return Math.floor(Math.random() * n);
}

function randomElement(arr) {
    return arr[random(arr.length)];
}

function randomEmoji(number) {
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕'];
    const emojiList = [];
    for (let i = 0; i < number; i++) {
        emojiList.push(randomElement(emojis));
    }
    return emojiList;
}

module.exports = {
    random,
    randomElement,
    randomEmoji
};