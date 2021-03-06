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
    res.send('Page not found!')
})

const shorts = require('./../models/shorts')

web.get('/:shortID', async (req, res) => {
    try {
        var doc = await shorts.findOne({ shortID: req.params.shortID }).exec()
        await shorts.updateOne({shortID: req.params.shortID}, {$inc: {clicks: 1 }}).exec()
        res.redirect(doc.long)
    } catch(err) {
        res.redirect('/404')
    }
})

module.exports = web