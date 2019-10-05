const Waifu = require('../models/waifus');

async function addWaifu(req, res) {
    try{
        const {
            name,
            show,
            description
        } = req.body

        const waifu = Waifu({
            name,
            show,
            description
        })

        const waifuStored = await waifu.save();

        res.status(201).send({ waifuStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}



module.exports = { 
    addWaifu 
}