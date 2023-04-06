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

async function getOneHeadphone(req, res, next) {
    let data = await Headphone.findOne({where: {id: req.params.id}});
    res.status(200).json(data);
}

async function createHeadphone(req, res, next) {
    let data = await Headphone.create(req.body);
    res.status(200).json(data);
}

function updateHeadphone(req, res, next) {
    res.send('Updated one');
}

function deleteHeadphone(req, res, next) {
    res.send('Deleted one');
}

module.exports = router;