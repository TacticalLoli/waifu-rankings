const express = require('express');
const router = express.Router();

const Waifus = require('../../models/waifus');

router.get('/', (req,res) => {
    Waifus.find()
    .then(waifus => res.json(waifus))
});

module.exports = router;