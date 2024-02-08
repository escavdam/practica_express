const express = require('express')
const app = express()


app.get('/holamundo', (req, res) =>{
    res.send('Holaaa');
});

app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
});