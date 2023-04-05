'use strict';

const express = require('express');
const cors = require('cors');
const hp_router = require('./routes/headphone');
const user_router = require('./routes/user');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/headphone', hp_router);
app.use('/user', user_router);

app.use('*', error404);
app.use(error500);

module.exports = {
    app,
    start: (port) => app.listen(port, () => {
        console.log(`Listening to server on port ${port}`);
    }),
};