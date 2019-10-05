const express = require('express');
const { addWaifu } = require('../controllers/waifuController');
const api = express.Router();

api.post('/waifus', addWaifu)

module.exports = api;