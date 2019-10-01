const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WaifuSchema = new Schema ({
    waifu_name: {
        type: String,
        required: true
    },
    waifu_description: {
        type: String,
        required: true
    },
    waifu_show_game: {
        type: String,
        required: true
    }
});

const Waifus = mongoose.model('Waifus', WaifuSchema);

module.exports = Waifus