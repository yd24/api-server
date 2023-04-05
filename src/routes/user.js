'use strict';

const express = require('express');
const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

function getAllUsers(req, res, next) {
    res.send('Got here');
}

function getOneUser(req, res, next) {
    res.send('Got here');
}

function createUser(req, res, next) {
    res.send('Got here');
}

function updateUser(req, res, next) {
    res.send('Got here');
}

function deleteUser(req, res, next) {
    res.send('Got here');
}

module.exports = router;