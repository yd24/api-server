'use strict';

const express = require('express');
const router = express.Router();
const Headphone = require('../models/headphone');

router.get('/', getAllHeadphones);
router.get('/:id', getOneHeadphone);
router.post('/', createHeadphone);
router.put('/:id', updateHeadphone);
router.delete('/:id', deleteHeadphone);

async function getAllHeadphones(req, res, next) {
    let data = await Headphone.findAll();
    res.status(200).json(data);
}

function getOneHeadphone(req, res, next) {
    res.send('Got here one');
}

function createHeadphone(req, res, next) {
    res.send('Made one');
}

function updateHeadphone(req, res, next) {
    res.send('Updated one');
}

function deleteHeadphone(req, res, next) {
    res.send('Deleted one');
}

module.exports = router;