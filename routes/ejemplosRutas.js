const express = require('express')
const router = express.Router()

router.get('/ruta_parametrica/:id', (request, response) => {
    console.log(request.params.id);
    response.send('Hola Mundo')
})



module.exports = router