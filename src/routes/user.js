'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

async function getAllUsers(req, res, next) {
    let data = await User.findAll();
    res.status(200).json(data);
}

async function getOneUser(req, res, next) {
    let data = await User.findOne({where: {id: req.params.id}});
    res.status(200).json(data);
}

function createUser(req, res, next) {
    res.send('Created one');
}

function updateUser(req, res, next) {
    res.send('Updated one');
}

function deleteUser(req, res, next) {
    res.send('Deleted one');
}

module.exports = router;