const express = require('express')
require('dotenv').config()

var api = express.Router()

// API V1 //
api.post('/new_short', (req, res) => {
    res.status('200')
    console.log(req.body)
})

module.exports = api