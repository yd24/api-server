'use strict';

const express = require('express');
const router = express.Router();

router.get('/', getAllHeadphones);
router.get('/:id', getOneHeadphone);
router.post('/', createHeadphone);
router.put('/:id', updateHeadphone);
router.delete('/:id', deleteHeadphone);

function getAllHeadphones(req, res, next) {
    res.send('Got here');
}

function getOneHeadphone(req, res, next) {
    res.send('Got here');
}

function createHeadphone(req, res, next) {
    res.send('Got here');
}

function updateHeadphone(req, res, next) {
    res.send('Got here');
}

function deleteHeadphone(req, res, next) {
    res.send('Got here');
}

module.exports = router;