'use strict';

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const { models } = require('../database/index');
const { TodoItem, TodoList } = models;

router.post('/todoitem', async (req, res) => {
    const { title, listId } = req.body;
    console.log(`Gonna create new item ${title} inside list with an id ${listId}`);
    const newTodoItem = new TodoItem({
        title: title,
        _id: new mongoose.Types.ObjectId().toHexString(),
        todoList: listId
    });

    try {
        await newTodoItem.save();
        res.send({ msg: `Create new item ${title} inside list ${listId}`});
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: JSON.stringify(err) });
    }
});

module.exports = router;