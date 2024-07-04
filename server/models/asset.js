const mongoose = require('mongoose')

const assetSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true,
        default: "NA"
    },
    actors:{
        type: String,
        required: false
    },
    releaseDate:{
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('Asset', assetSchema)