const express = require("express");
const mongoose = require("mongoose");
const nanoid = require("./../utils/id");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

var api = express.Router();

const shorts = require("./../models/shorts");

// API V1 //
api.post("/new_short", body("url").isURL().withMessage('invalid URL'), (req, res) => {
  
    try {
        validationResult(req).throw()

        const id = nanoid();

        const newShorts = new shorts({
            long: req.body.url,
            shortID: id,
        });
        newShorts.save();

        res.status("201")
            .send({ url: process.env.SHORT_URL + id })
    } catch (err) {
        res.sendStatus(400).end()
    }
});

module.exports = api;
