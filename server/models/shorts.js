const mongoose = require('mongoose')
require('mongoose-type-url')

const shortsSchema = new mongoose.Schema({
    long: mongoose.SchemaType.Url,
    shortID: String,
    date: { type: Date, default: Date.now() },
    review: {
        reviewed: { type: Boolean, default: false },
        reviewed_by: { type: String, default: null },
        reviewed_on: { type: Date, default: null }
    }
})

const shorts = mongoose.model('shorts', shortsSchema)
module.exports = shorts
