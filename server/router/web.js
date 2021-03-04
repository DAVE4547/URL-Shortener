const express = require('express')
require('dotenv').config()

var web = express.Router()

// WEB //
web.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' })
})
web.get('/legal', (req, res) => {
    res.sendFile('legal.html', { root: './public' })
})
web.get('/404', (req, res) => {
    res.status(404)
})

const shorts = require('./../models/shorts')

web.get('/:shortID', async (req, res) => {
    var doc = await shorts.findOne({ shortID: req.params.shortID }).exec()
    res.redirect(doc.long)
})

module.exports = web