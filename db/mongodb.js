const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log('DB connected'))

async function connectDb ({ user, pass }) {
    const uri = `mongodb+srv://${user}:${pass}@cluster0-oqqos.mongodb.net/admin?retryWrites=true&w=majority`
    await mongoose.connect(uri, { useNewUrlParser: true })
}

module.exports = connectDb;