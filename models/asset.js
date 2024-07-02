const mongoose = require('mongoose')

const assetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscribeToChannel:{
        type: String,
        required: true
    },
    subscribeDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Asset', assetSchema)