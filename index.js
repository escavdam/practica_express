const morgan = require('morgan');
const express = require('express');

app.use(morgan('combined'))

function randomEmoji(){
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    return emojis[Math.floor(Math.random() * emojis.length)];
}

app.get('/emoji', (req, res) => {
    res.send(randomEmoji());
    });
    
function random(n){ //función para devolver un número aleatorio entre 0 y n
     return Math.floor(Math.random() * n);
 }
    
function randomElement(arr){ //función para devolver un elemento aleatorio de un array
        return arr[random(arr.length)];
}

function randomEmoji(...args){ //función para devolver un emoji aleatorio o n emojis aleatorios
    const emojis = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥥', '🥑', '🍆', '🥔', '🥕']
    if(args.length === 0){ //si no se pasa ningún argumento, devolver un emoji aleatorio
        return randomElement(emojis);
    }
    const nEmojis = args[0]; //guarda el valor del primer argumento
    const randomEmojis = []; //crea un array vacío
    for (let i = 0; i < nEmojis; i++) { //itera n veces
        randomEmojis.push(randomElement(emojis)); //añade un emoji aleatorio al array
    }
    return randomEmojis; //devuelve el array
}
app.get('/emoji', (req, res) => {
    const emojiNumber = parseInt(req.query.emojiNumber); //guarda el valor del query parameter emojiNumber y conviertelo a entero
    emojiNumber ? res.send(randomEmoji(emojiNumber)) : res.send(randomEmoji()); //si emojiNumber existe, devuelve n emojis, si no, devuelve 1 emoji
    });