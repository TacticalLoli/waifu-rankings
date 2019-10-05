const express = require('express');
const bodyParser = require('body-parser');
const waifuRoutes = require('./routes/waifus');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1', waifuRoutes)

module.exports = app;