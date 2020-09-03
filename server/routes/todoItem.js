'use strict';

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const { models } = require('../database/index');
const { route } = require('./todoList');
const { TodoItem, TodoList } = models;

// split and create separate GET by ID route
router.post('/todoitem', async (req, res) => {
    const { title, listId, isDone, isDeleted } = req.body;
    const _id = new mongoose.Types.ObjectId().toHexString();
    const newTodoItem = new TodoItem({
        title,
        _id,
        todoList: listId,
        isDone,
        isDeleted
    });

    try {
        await newTodoItem.save();
        const item = await TodoItem.find({ _id }).exec();
        res.send( item );
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: JSON.stringify(err) });
    }
});

router.get('/todoitem', async (req, res) => {
    try {
        const todoItems = await TodoItem.find({}).exec();
        res.send(todoItems);
    } catch(err) {
        res.status(500).send({ err: JSON.stringify(err) });
    }
});

router.delete('/todoitem/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await TodoItem.findByIdAndDelete(id);
        res.send({ msg: `Todo Item with an id ${id} was deleted` });
    } catch (err) {
        res.status(500).send({ err: JSON.stringify(err) });
    }
});

router.put('/todoitem/:id', async (req, res) => {
    const { id } = req.params;
    const params = req.body;
    try {
        await TodoItem.findOneAndUpdate({ _id: id}, params);
        res.send({ msg: `Todo Item with an id ${id} was updated by new options ${JSON.stringify(params)}` });
    } catch (err) {
        res.status(500).send({ err: JSON.stringify(err) });
    }
});

module.exports = router;