'use strict';

//More verbose 404? One for bad method and one for bad path

function error404(request, response, next) {
    response.status(404).send('404 Resource not found.');
}

module.exports = error404;