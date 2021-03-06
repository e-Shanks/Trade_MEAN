const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
    // _id generated automatically
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: { type: String, required: true },
    ranks: [{
        name: { type: String, required: true },
        logo: { type: String, require: true }
    }]
})

module.exports = mongoose.model('Game', GameSchema)