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

async function createUser(req, res, next) {
    let data = await User.create(req.body);
    res.status(200).json(data);
}

async function updateUser(req, res, next) {
    let data = await User.update(req.body, {where: {id: req.params.id}});
    res.status(200).json(data);
}

async function deleteUser(req, res, next) {
    let data = await User.destroy({where: {id: req.params.id}});
    res.status(200).send('User successfully deleted.');
}

module.exports = router;