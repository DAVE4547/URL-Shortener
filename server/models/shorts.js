const mongoose = require('mongoose')
require('mongoose-type-url')

const shortsSchema = new mongoose.Schema({
    long: { type: mongoose.SchemaTypes.Url, required: true },
    shortID: { type: String, required: true, unique: true},
    date: { type: Date, default: Date.now() },
    review: {
        reviewed: { type: Boolean, default: false },
        reviewed_by: { type: String, default: null },
        reviewed_on: { type: Date, default: null }
    }
})

const shorts = mongoose.model('shorts', shortsSchema)
module.exports = shorts
