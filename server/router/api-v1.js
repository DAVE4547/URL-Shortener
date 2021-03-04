const express = require("express");
const mongoose = require("mongoose");
const nanoid = require("./../utils/id");
const { body, validationResult } = require("express-validator");
const baseShortURL = process.env.SHORT_URL || 'localhost'
require("dotenv").config();

var api = express.Router();

const shorts = require("./../models/shorts");

// API V1 //
api.post("/new_short", body("url").isURL({ protocols: ['http', 'https'] }).withMessage('invalid URL'), (req, res) => {
  
    try {
        validationResult(req).throw()

        const id = nanoid();

        const newShorts = new shorts({
            long: req.body.url,
            shortID: id,
        });
        newShorts.save();

        res.status("201")
            .send({ url: baseShortURL + id })
    } catch (err) {
        res.sendStatus(400).end()
    }
});

module.exports = api;
