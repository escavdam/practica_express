const express = require('express')
const router = express.Router()

router.get('/ruta_parametrica/:id', (request, response) => {
    console.log(request.params.id);
    response.send('Hola mundo');
});

router.get('/ruta_parametrica/:id/:name', (request, response) => {
    console.log(request.params);
    const { id, name } = request.params;
    response.send(id + ' ' + name);
});

router.get('/ruta_query', (request, response) => {
    console.log(request.query);
    response.end();
})

module.exports = router