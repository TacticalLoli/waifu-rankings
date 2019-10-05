const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WaifuSchema = new Schema({
    name: String,
    show: String,
    imgURL: String,
    description: String
})

module.exports = mongoose.model('Waifu', WaifuSchema);